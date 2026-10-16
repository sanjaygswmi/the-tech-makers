import { NextResponse } from "next/server";
import dbConnect from "@/src/lib/dbConnect";
import User from "@/src/models/User.js";
import auth from "@/src/lib/authMiddleware";

export async function GET(req) {
    const authResponse = await auth(req, ["admin"]);
    if (authResponse.status !== 200) {
        return NextResponse.json(authResponse, { status: authResponse.status });
    }

    await dbConnect();

    try {
        const users = await User.find({}, "-password -passwordResetToken -passwordResetExpires"); // Exclude credentials and reset-token fields
        return NextResponse.json({ users, status: 1 }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ msg: "Server error", status: 0 }, { status: 500 });
    }
}
