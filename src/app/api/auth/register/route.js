import { NextResponse } from "next/server";
import dbConnect from "@/src/lib/dbConnect";
import User from "@/src/models/User";
import auth from "@/src/lib/authMiddleware";

export async function POST(req) {
    const authResponse = await auth(req, ["admin"]); // Only admins can access
    if (authResponse.status !== 200) {
        return NextResponse.json(authResponse, { status: authResponse.status });
    }

    await dbConnect();
    const { name, email, phone, password } = await req.json();

    // Check if user is already logged in (Token in Headers or Cookies)
    /* const token = req.headers.get('x-auth-token')?.split(' ')[1];
    if (token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET);
            return NextResponse.redirect(new URL('/admin/dashboard', req.url));
        } catch (err) {
            // Invalid token, proceed with registration
        }
    } */

    try {
        // Validate input
        if (!name || !email || !phone || !password) {
            return NextResponse.json({ msg: "Please fill in all fields", status: 0 }, { status: 400 });
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json({ msg: "Invalid email format", status: 0 }, { status: 400 });
        }

        if (!/^\d{10}$/.test(phone)) {
            return NextResponse.json({ msg: "Phone number must be 10 digits", status: 0 }, { status: 400 });
        }

        // Check if user exists
        let user = await User.findOne({ $or: [{ email }, { phone }] });
        if (user) {
            return NextResponse.json({ msg: "Email or phone already registered", status: 0 }, { status: 400 });
        }

        // Hash password & save user
        // const hashedPassword = await bcrypt.hash(password, 10); // Hased by schema before saving
        const newUser = new User({ name, email, phone, password: password });

        await newUser.save();
        return NextResponse.json({ msg: "User registered successfully", status: 1 }, { status: 201 });

    } catch (err) {
        console.error(err.message);
        return NextResponse.json({ msg: "Server error", status: 0 }, { status: 500 });
    }
}
