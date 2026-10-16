import { NextResponse } from "next/server";
import auth from "@/src/lib/authMiddleware";

export async function GET(req) {
    const result = await auth(req); // Ensure auth is awaited

    if (result.status !== 200) {
        return NextResponse.json(result, { status: result.status });
    }

    return NextResponse.json({ valid: true, user: result.user }, { status: 200 });
}
