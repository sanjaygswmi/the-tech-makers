import nodemailer from "nodemailer";

const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[character]);

/**
 * Send a contact enquiry without returning provider response objects or errors.
 */
export async function sendContactMail(mailData, subject = "New Contact Form Submission") {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            connectionTimeout: 10_000,
            greetingTimeout: 10_000,
            socketTimeout: 20_000,
        });

        const formatKey = (key) =>
            key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
        const senderName = mailData.first_name
            ? `${mailData.first_name} ${mailData.last_name || ""}`.trim()
            : mailData.name || "";
        const senderEmail = mailData.email || "";

        const htmlBody = `
            <h2>${escapeHtml(subject)}</h2>
            <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                ${Object.entries(mailData)
                    .map(([key, value]) => `<tr>
                        <td style="font-weight: bold; background: #f4f4f4; padding: 6px;">${escapeHtml(formatKey(key))}:</td>
                        <td style="padding: 6px;">${escapeHtml(value)}</td>
                    </tr>`)
                    .join("")}
            </table>
        `;

        await transporter.sendMail({
            from: `"The Tech Makers" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject,
            ...(senderEmail ? { replyTo: `"${senderName.replace(/["\r\n]/g, "")}" <${senderEmail}>` } : {}),
            text: Object.entries(mailData)
                .map(([key, value]) => `${formatKey(key)}: ${String(value ?? "")}`)
                .join("\n"),
            html: htmlBody,
        });

        return { success: true };
    } catch {
        // Do not return provider exceptions or request data to callers/logs.
        return { success: false, message: "Email delivery failed" };
    }
}

const sendMail = async ({ to, subject, text = "", html = "", replyTo = "" }) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 10_000,
        greetingTimeout: 10_000,
        socketTimeout: 20_000,
    });

    await transporter.sendMail({
        from: `"The Tech Makers" <${process.env.SMTP_USER}>`,
        to,
        subject,
        replyTo,
        text,
        html,
    });
    return { success: true, message: "Email sent successfully" };
};

export default sendMail;
