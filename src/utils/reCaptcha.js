// Verify a reCAPTCHA token and fail closed when configuration or Google is unavailable.
export async function verifyRecaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (typeof secretKey !== "string" || !secretKey.trim()) {
        return false;
    }

    if (typeof token !== "string" || !token.trim()) {
        return false;
    }

    try {
        const body = new URLSearchParams({
            secret: secretKey,
            response: token,
        });

        const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
        });

        if (!res.ok) {
            return false;
        }

        const data = await res.json();
        return data?.success === true;
    } catch {
        // Do not allow provider/network/JSON failures to bypass bot verification.
        return false;
    }
}
