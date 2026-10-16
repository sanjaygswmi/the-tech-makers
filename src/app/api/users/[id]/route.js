import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/src/lib/dbConnect";
import User from "@/src/models/User.js";
import auth from "@/src/lib/authMiddleware";

const authError = (result) =>
    NextResponse.json({ msg: result.msg }, { status: result.status });

const invalidBody = () =>
    NextResponse.json({ msg: "Request body must be a valid JSON object" }, { status: 400 });

const isPlainObject = (value) =>
    value !== null && typeof value === "object" && !Array.isArray(value);

const invalidUserId = (id) =>
    !mongoose.isValidObjectId(id);

const validationError = (error) =>
    error?.name === "ValidationError" || error?.code === 11000;

// Get a user profile (admins may view any profile; users may view their own).
export async function GET(req, { params }) {
    const { id } = await params;
    const authResponse = await auth(req);
    if (authResponse.status !== 200) return authError(authResponse);

    if (authResponse.user.role !== "admin" && authResponse.user.id !== id) {
        return NextResponse.json({ msg: "Access denied" }, { status: 403 });
    }
    if (invalidUserId(id)) {
        return NextResponse.json({ msg: "Invalid user ID" }, { status: 400 });
    }

    try {
        await dbConnect();
        const user = await User.findOne({ _id: id, isDeleted: { $ne: true } })
            .select("-password -passwordResetToken -passwordResetExpires");
        if (!user) {
            return NextResponse.json({ msg: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ user, status: 1 });
    } catch {
        return NextResponse.json({ msg: "Server error" }, { status: 500 });
    }
}

// Update a profile. Only admins may change account roles.
export async function PATCH(req, { params }) {
    const { id: userId } = await params;
    const authResponse = await auth(req);
    if (authResponse.status !== 200) return authError(authResponse);

    const loggedInUser = authResponse.user;
    const isAdmin = loggedInUser.role === "admin";
    const isSelfUpdate = loggedInUser.id === userId;
    if (!isAdmin && !isSelfUpdate) {
        return NextResponse.json({ msg: "Access denied" }, { status: 403 });
    }
    if (invalidUserId(userId)) {
        return NextResponse.json({ msg: "Invalid user ID" }, { status: 400 });
    }

    let body;
    try {
        body = await req.json();
    } catch {
        return invalidBody();
    }
    if (!isPlainObject(body)) return invalidBody();

    const allowedFields = new Set(["name", "email", "phone", "role", "newPassword"]);
    if (Object.keys(body).length === 0 || Object.keys(body).some((key) => !allowedFields.has(key))) {
        return NextResponse.json({ msg: "Provide valid profile fields to update" }, { status: 400 });
    }

    for (const field of ["name", "email", "phone"]) {
        if (Object.hasOwn(body, field) && (typeof body[field] !== "string" || !body[field].trim())) {
            return NextResponse.json({ msg: `${field} must be a non-empty string` }, { status: 400 });
        }
    }
    if (Object.hasOwn(body, "email") && !/^\S+@\S+\.\S+$/.test(body.email.trim())) {
        return NextResponse.json({ msg: "Please enter a valid email address" }, { status: 400 });
    }
    if (Object.hasOwn(body, "phone") && !/^\d{10}$/.test(body.phone.trim())) {
        return NextResponse.json({ msg: "Phone number must be exactly 10 digits" }, { status: 400 });
    }
    if (Object.hasOwn(body, "role") && (!isAdmin || !["user", "admin"].includes(body.role))) {
        return NextResponse.json(
            { msg: isAdmin ? "Role must be user or admin" : "Only admins may change account roles" },
            { status: 403 }
        );
    }
    if (Object.hasOwn(body, "newPassword") &&
        (typeof body.newPassword !== "string" || body.newPassword.length < 8 || body.newPassword.length > 128)) {
        return NextResponse.json(
            { msg: "New password must be between 8 and 128 characters" },
            { status: 400 }
        );
    }

    try {
        await dbConnect();
        const dbUser = await User.findOne({ _id: userId, isDeleted: { $ne: true } });
        if (!dbUser) {
            return NextResponse.json({ msg: "User not found" }, { status: 404 });
        }

        for (const field of ["name", "email", "phone"]) {
            if (Object.hasOwn(body, field)) dbUser[field] = body[field].trim();
        }
        if (Object.hasOwn(body, "role")) dbUser.role = body.role;
        if (Object.hasOwn(body, "newPassword")) dbUser.password = body.newPassword;

        await dbUser.save();
        return NextResponse.json({ msg: "User updated successfully", status: 1 });
    } catch (error) {
        if (validationError(error)) {
            return NextResponse.json({ msg: "Profile details are invalid or already in use" }, { status: 400 });
        }
        return NextResponse.json({ msg: "Server error" }, { status: 500 });
    }
}

// Reset a user's password. Admins may reset any account; users may reset their own.
export async function POST(req, { params }) {
    const { id } = await params;
    const authResponse = await auth(req);
    if (authResponse.status !== 200) return authError(authResponse);

    if (authResponse.user.role !== "admin" && authResponse.user.id !== id) {
        return NextResponse.json({ msg: "Access denied" }, { status: 403 });
    }
    if (invalidUserId(id)) {
        return NextResponse.json({ msg: "Invalid user ID" }, { status: 400 });
    }

    let body;
    try {
        body = await req.json();
    } catch {
        return invalidBody();
    }
    if (!isPlainObject(body) || typeof body.newPassword !== "string" ||
        body.newPassword.length < 8 || body.newPassword.length > 128) {
        return NextResponse.json(
            { msg: "New password must be a string between 8 and 128 characters" },
            { status: 400 }
        );
    }

    try {
        await dbConnect();
        const updatedUser = await User.findOneAndUpdate(
            { _id: id, isDeleted: { $ne: true } },
            { password: await bcrypt.hash(body.newPassword, 10) },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return NextResponse.json({ msg: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ msg: "Password updated successfully", status: 1 });
    } catch {
        return NextResponse.json({ msg: "Server error" }, { status: 500 });
    }
}
