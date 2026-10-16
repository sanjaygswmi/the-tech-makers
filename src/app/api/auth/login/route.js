import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/src/lib/dbConnect";
import User from "@/src/models/User.js";
import { enforceRateLimit } from "@/src/utils/rateLimit.js";

const JWT_SECRET = process.env.JWT_SECRET;
const MAX_BODY_BYTES = 8 * 1024;
const MAX_PASSWORD_LENGTH = 1024;

function invalidRequest(message = "Please provide a valid email and password") {
    return NextResponse.json({ msg: message, status: 0 }, { status: 400 });
}

export async function POST(req) {
    if (!JWT_SECRET) {
        return NextResponse.json({ msg: "Authentication is not configured", status: 0 }, { status: 500 });
    }

    // Apply the IP-based limit before parsing input or querying the database.
    const rateLimit = await enforceRateLimit(req, {
        namespace: "login",
        limit: 10,
        windowSeconds: 15 * 60,
    });

    if (!rateLimit.allowed) {
        return NextResponse.json(
            { msg: "Too many login attempts. Please try again later.", status: 0 },
            { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } },
        );
    }

    const contentLength = Number(req.headers.get("content-length"));
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
        return NextResponse.json({ msg: "Request body is too large", status: 0 }, { status: 413 });
    }

    let body;
    try {
        const rawBody = await req.text();
        if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
            return NextResponse.json({ msg: "Request body is too large", status: 0 }, { status: 413 });
        }
        body = JSON.parse(rawBody);
    } catch {
        return invalidRequest("Invalid JSON request body");
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return invalidRequest();
    }

    const { email, password } = body;
    if (
        typeof email !== "string"
        || typeof password !== "string"
        || email.trim().length === 0
        || email.length > 254
        || password.length === 0
        || password.length > MAX_PASSWORD_LENGTH
        || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
        return invalidRequest();
    }

    try {
        await dbConnect();

        const normalizedEmail = email.trim();
        const user = await User.findOne({
            email: normalizedEmail,
            isDeleted: { $ne: true },
        }).select("+password");

        if (!user) {
            return NextResponse.json({ msg: "Invalid credentials", status: 0 }, { status: 400 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ msg: "Invalid credentials", status: 0 }, { status: 400 });
        }

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });

        const response = NextResponse.json({ status: 1, message: "Login successful" });
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 86400,
        });

        return response;
    } catch {
        // Avoid logging database errors or other potentially sensitive details.
        console.error("Login request failed");
        return NextResponse.json({ msg: "Server error", status: 0 }, { status: 500 });
    }
}
