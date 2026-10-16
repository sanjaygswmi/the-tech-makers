import { sendContactMail } from "@/src/utils/sendMail";
import { addToContact } from "@/src/utils/hubspot";
import { verifyRecaptcha } from "@/src/utils/reCaptcha";
import { enforceRateLimit } from "@/src/utils/rateLimit";

const MAX_BODY_BYTES = 20 * 1024;
const FIELD_LIMITS = {
    fname: 100,
    lname: 100,
    email: 254,
    phone: 40,
    company: 200,
    regarding: 200,
    message: 5000,
    analyticsSource: 200,
    recaptchaToken: 4096,
};
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\d.\-\s]{7,40}$/;

function isLocalDevelopmentRequest(req) {
    if (process.env.NODE_ENV !== "development") return false;
    try {
        const hostname = new URL(req.url).hostname;
        return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1" || hostname === "[::1]";
    } catch {
        return false;
    }
}

function cleanString(value, maxLength, { required = false } = {}) {
    if (value === undefined) return required ? null : "";
    if (value === null) return null;
    if (typeof value !== "string") return null;
    const normalized = value.trim();
    if (required && !normalized) return null;
    if (normalized.length > maxLength) return null;
    return normalized;
}

export async function POST(req) {
    const rateLimit = await enforceRateLimit(req, {
        namespace: "contact",
        limit: 5,
        windowSeconds: 10 * 60,
    });
    if (!rateLimit.allowed) {
        return Response.json(
            { error: "Too many requests. Please wait before trying again." },
            {
                status: rateLimit.limited ? 429 : 503,
                headers: rateLimit.retryAfter ? { "Retry-After": String(rateLimit.retryAfter) } : {},
            }
        );
    }

    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
        return Response.json({ error: "Request body is too large." }, { status: 413 });
    }

    let data;
    try {
        const rawBody = await req.text();
        if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
            return Response.json({ error: "Request body is too large." }, { status: 413 });
        }
        data = JSON.parse(rawBody);
    } catch {
        return Response.json({ error: "A valid JSON request body is required." }, { status: 400 });
    }

    if (!data || typeof data !== "object" || Array.isArray(data)) {
        return Response.json({ error: "A valid JSON object is required." }, { status: 400 });
    }

    const fname = cleanString(data.fname, FIELD_LIMITS.fname, { required: true });
    const lname = cleanString(data.lname, FIELD_LIMITS.lname, { required: true });
    const email = cleanString(data.email, FIELD_LIMITS.email, { required: true })?.toLowerCase();
    const phone = cleanString(data.phone, FIELD_LIMITS.phone, { required: true });
    const company = cleanString(data.company, FIELD_LIMITS.company);
    const regarding = cleanString(data.regarding, FIELD_LIMITS.regarding, { required: true });
    const message = cleanString(data.message, FIELD_LIMITS.message, { required: true });
    const analyticsSource = cleanString(data.analyticsSource, FIELD_LIMITS.analyticsSource);
    const localDevelopment = isLocalDevelopmentRequest(req);
    const recaptchaToken = cleanString(data.recaptchaToken, FIELD_LIMITS.recaptchaToken, { required: !localDevelopment });

    if (
        !fname || !lname || !email || !phone || !regarding || !message || (!localDevelopment && !recaptchaToken) ||
        company === null || analyticsSource === null
    ) {
        return Response.json(
            { error: "Please provide valid values for all required fields." },
            { status: 400 }
        );
    }
    if (!EMAIL_PATTERN.test(email)) {
        return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!PHONE_PATTERN.test(phone) || phone.replace(/\D/g, "").length < 7) {
        return Response.json({ error: "Please provide a valid phone number." }, { status: 400 });
    }

    try {
        // Google reCAPTCHA is bypassed only for localhost requests in development.
        if (!localDevelopment) {
            const isHuman = await verifyRecaptcha(recaptchaToken);
            if (!isHuman) {
                return Response.json({ error: "reCAPTCHA verification failed." }, { status: 403 });
            }
        }

        const formData = {
            first_name: fname,
            last_name: lname,
            email,
            phone,
            company,
            regarding,
            message,
            traffic_source: analyticsSource,
        };

        // Attempt CRM capture and admin email independently; email still fires if HubSpot fails.
        let hubspotResult = { success: false };
        try {
            hubspotResult = await addToContact(formData);
        } catch {
            console.error("HubSpot contact delivery failed");
        }

        const emailSubject = hubspotResult?.contactAction === "updated"
            ? "Repeat Contact Form Submission"
            : hubspotResult?.contactAction === "created"
                ? "New Contact Form Submission"
                : "Website Contact Form Submission";

        let emailResult = { success: false };
        try {
            emailResult = await sendContactMail(formData, emailSubject);
        } catch {
            console.error("Contact email delivery failed");
        }

        if (!emailResult?.success) console.error("Contact email delivery failed");
        if (!hubspotResult?.success) console.error("HubSpot contact delivery failed");

        if (!emailResult?.success && !hubspotResult?.success) {
            return Response.json(
                { success: false, error: "We could not submit your enquiry right now. Please try again shortly." },
                { status: 502 }
            );
        }

        return Response.json({
            success: true,
            message: "Thank you. Your enquiry has been received.",
        });
    } catch {
        console.error("Contact form request failed");
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
