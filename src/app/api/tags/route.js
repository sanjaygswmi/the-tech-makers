import { NextResponse } from "next/server";
import dbConnect from '@/src/lib/dbConnect';
import Tag from "@/src/models/Tag";
import auth from "@/src/lib/authMiddleware"; // Middleware for authentication

// ✅ Create a new tag (POST)
export async function POST(req) {
    try {
        await dbConnect();

        // Authenticate user using cookies
        const isAuthenticated = await auth(req, ["admin"]);
        if (isAuthenticated.status !== 200) {
            return NextResponse.json(
                { status: 0, msg: isAuthenticated.msg },
                { status: isAuthenticated.status }
            );
        }

        const {
            title,
            slug,
            description,
            metaTitle,
            metaDescription,
            metaKeyword,
            headerScripts,
            bodyScripts,
        } = await req.json();

        let tag = await Tag.findOne({ slug });
        if (tag) {
            return NextResponse.json({ status: 0, msg: "Tag with this slug already exists" }, { status: 400 });
        }

        tag = new Tag({
            title,
            slug,
            description,
            metaTitle,
            metaDescription,
            metaKeyword,
            headerScripts,
            bodyScripts,
        });
        await tag.save();

        return NextResponse.json({ status: 1, msg: "Tag created successfully." }, { status: 201 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ status: 0, msg: "Server Error" }, { status: 500 });
    }
}

// ✅ Get all tags (GET)
export async function GET(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const pageValue = searchParams.get("page");
        const limitValue = searchParams.get("limit");
        const page = pageValue === null ? 1 : Number(pageValue);
        const limit = limitValue === null ? 10 : Number(limitValue);
        if (
            !Number.isSafeInteger(page) || page < 1 ||
            !Number.isSafeInteger(limit) || limit < 1 || limit > 100
        ) {
            return NextResponse.json(
                { msg: "Page must be a positive integer and limit must be between 1 and 100", status: 0 },
                { status: 400 }
            );
        }
        const startIndex = (page - 1) * limit;

        const totalTags = await Tag.countDocuments() || 0;
        const tags = await Tag.find()
            .select("title slug description metaTitle metaDescription metaKeyword status image createdAt updatedAt")
            .sort({ createdAt: -1 })
            .skip(startIndex)
            .limit(limit);

        return NextResponse.json({
            totalTags,
            currentPage: page,
            totalPages: Math.max(1, Math.ceil(totalTags / limit)),
            tags,
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ status: 0, msg: "Server error" }, { status: 500 });
    }
}
