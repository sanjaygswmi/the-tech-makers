import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";
import dbConnect from "@/src/lib/dbConnect";
import User from "@/src/models/User";
import sendMail from "@/src/utils/sendMail";
import { enforceRateLimit } from "@/src/utils/rateLimit";

const MAX_RESET_BODY_BYTES = 8 * 1024;

const genericResetResponse = () =>
    NextResponse.json(
        { msg: "If an account exists for that email, reset instructions will be sent.", status: 1 },
        { status: 200 }
    );

async function readResetBody(req) {
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > MAX_RESET_BODY_BYTES) {
        return { error: "Request body is too large", status: 413 };
    }

    try {
        const rawBody = await req.text();
        if (Buffer.byteLength(rawBody, "utf8") > MAX_RESET_BODY_BYTES) {
            return { error: "Request body is too large", status: 413 };
        }
        return { body: JSON.parse(rawBody) };
    } catch {
        return { error: "A valid JSON body is required", status: 400 };
    }
}

export async function POST(req) {
    const rateLimit = await enforceRateLimit(req, {
        namespace: "password-reset-request",
        limit: 5,
        windowSeconds: 15 * 60,
    });
    if (!rateLimit.allowed) {
        return NextResponse.json(
            { msg: "Too many requests. Please wait before trying again.", status: 0 },
            { status: rateLimit.limited ? 429 : 503, headers: rateLimit.retryAfter ? { "Retry-After": String(rateLimit.retryAfter) } : {} }
        );
    }
    try {
        const parsedBody = await readResetBody(req);
        if (parsedBody.error) {
            return NextResponse.json({ msg: parsedBody.error, status: 0 }, { status: parsedBody.status });
        }
        const body = parsedBody.body;
        const email = body && typeof body === "object" && !Array.isArray(body) ? body.email : undefined;
        if (typeof email !== "string" || email.trim().length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            return NextResponse.json({ msg: "Email is required", status: 0 }, { status: 400 });
        }

        const configuredFrontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
        const frontendUrlValue =
            configuredFrontendUrl || (process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "");
        if (!frontendUrlValue) {
            return NextResponse.json(
                { msg: "Password reset is temporarily unavailable", status: 0 },
                { status: 500 }
            );
        }

        let frontendUrl;
        try {
            const parsedUrl = new URL(frontendUrlValue);
            if (
                (parsedUrl.protocol !== "https:" && !(process.env.NODE_ENV !== "production" && parsedUrl.protocol === "http:")) ||
                parsedUrl.username ||
                parsedUrl.password
            ) {
                throw new Error("Invalid frontend URL");
            }
            frontendUrl = parsedUrl.origin;
        } catch {
            return NextResponse.json(
                { msg: "Password reset is temporarily unavailable", status: 0 },
                { status: 500 }
            );
        }

        await dbConnect();
        const user = await User.findOne({
            email: email.trim().toLowerCase(),
            isDeleted: { $ne: true },
        });
        if (!user) return genericResetResponse();

        // Store only a hash; the raw, single-use token is delivered by email.
        const resetToken = randomBytes(32).toString("hex");
        user.passwordResetToken = await bcrypt.hash(resetToken, 10);
        user.passwordResetExpires = new Date(Date.now() + 60 * 60 * 1000);
        await user.save();

        const resetLink = `${frontendUrl}/reset-password?token=${encodeURIComponent(resetToken)}&email=${encodeURIComponent(user.email)}`;

        const emailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #333;">Reset Your Password</h2>
                <p>Dear user,</p>
                <p>You recently requested to reset your password. Use the link below to continue:</p>
                <p style="text-align: center;">
                    <a href="${resetLink}" style="display: inline-block; background-color: #007bff; color: white; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-weight: bold;">
                        Reset Password
                    </a>
                </p>
                <p>This link will expire in <strong>1 hour</strong> and can be used only once.</p>
                <p>If you did not request this, please ignore this email.</p>
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
                <p style="font-size: 12px; color: #888;">Regards,<br><strong>The Tech Makers</strong></p>
            </div>
        `;

        try {
            await sendMail({
                to: user.email,
                subject: "Reset Your Password",
                html: emailBody,
            });
        } catch {
            // Keep the public response identical whether the address exists or email delivery fails.
            console.error("Password reset email delivery failed");
        }

        return genericResetResponse();
    } catch {
        return NextResponse.json({ msg: "Unable to process password reset", status: 0 }, { status: 500 });
    }
}

export async function PATCH(req) {
    const rateLimit = await enforceRateLimit(req, {
        namespace: "password-reset-complete",
        limit: 10,
        windowSeconds: 15 * 60,
    });
    if (!rateLimit.allowed) {
        return NextResponse.json(
            { msg: "Too many requests. Please wait before trying again.", status: 0 },
            { status: rateLimit.limited ? 429 : 503, headers: rateLimit.retryAfter ? { "Retry-After": String(rateLimit.retryAfter) } : {} }
        );
    }
    try {
        const parsedBody = await readResetBody(req);
        if (parsedBody.error) {
            return NextResponse.json({ msg: parsedBody.error, status: 0 }, { status: parsedBody.status });
        }
        const body = parsedBody.body;
        const { token, email, newPassword } = body && typeof body === "object" && !Array.isArray(body) ? body : {};
        if (
            typeof token !== "string" || token.length > 256 || !token ||
            typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
            typeof newPassword !== "string" || newPassword.length < 8 || newPassword.length > 128
        ) {
            return NextResponse.json(
                { msg: "A valid token, email, and password of at least 8 characters are required", status: 0 },
                { status: 400 }
            );
        }

        await dbConnect();
        const user = await User.findOne({
            email: email.trim().toLowerCase(),
            isDeleted: { $ne: true },
        });
        if (
            !user ||
            !user.passwordResetToken ||
            !user.passwordResetExpires ||
            user.passwordResetExpires.getTime() <= Date.now()
        ) {
            return NextResponse.json(
                { msg: "Invalid or expired token", status: 0 },
                { status: 400 }
            );
        }

        const isTokenValid = await bcrypt.compare(token, user.passwordResetToken);
        if (!isTokenValid) {
            return NextResponse.json(
                { msg: "Invalid or expired token", status: 0 },
                { status: 400 }
            );
        }

        user.password = newPassword; // Mongoose hashes this in the pre-save hook.
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();

        return NextResponse.json({ msg: "Password reset successful", status: 1 });
    } catch {
        return NextResponse.json(
            { msg: "Unable to reset password", status: 0 },
            { status: 500 }
        );
    }
}
