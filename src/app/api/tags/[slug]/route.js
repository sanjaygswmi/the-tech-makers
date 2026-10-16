import { NextResponse } from "next/server";
import dbConnect from '@/src/lib/dbConnect';
import Tag from "@/src/models/Tag";
import auth from "@/src/lib/authMiddleware";

// ✅ Get a tag by slug (GET)
export async function GET(req, { params }) {
    const { slug } = await params;
    const authResponse = await auth(req, ["admin"]);
    if (authResponse.status !== 200) {
        return NextResponse.json({ msg: authResponse.msg }, { status: authResponse.status });
    }

    try {
        await dbConnect();
        
        const tag = await Tag.findOne({ slug });
        if (!tag) {
            return NextResponse.json({ status: 0, msg: "Tag not found" }, { status: 404 });
        }
        return NextResponse.json({ data: tag, status: 1 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ status: 0, msg: "Server error" }, { status: 500 });
    }
}

// ✅ Update a tag by slug (PUT)
export async function PUT(req, { params }) {
    const { slug } = await params;
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
            description,
            metaTitle,
            metaDescription,
            metaKeyword,
            headerScripts,
            bodyScripts,
        } = await req.json();

        let tag = await Tag.findOne({ slug });
        if (!tag) {
            return NextResponse.json({ status: 0, msg: "Tag not found" }, { status: 404 });
        }

        tag.title = title || tag.title;
        tag.description = description || tag.description;
        tag.metaTitle = metaTitle || tag.metaTitle;
        tag.metaDescription = metaDescription || tag.metaDescription;
        tag.metaKeyword = metaKeyword || tag.metaKeyword;
        tag.headerScripts = headerScripts || tag.headerScripts;
        tag.bodyScripts = bodyScripts || tag.bodyScripts;

        await tag.save();
        return NextResponse.json({ status: 1, msg: "Tag updated successfully." });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ status: 0, msg: "Server error" }, { status: 500 });
    }
}

// ✅ Delete a tag by slug (DELETE)
export async function DELETE(req, { params }) {
    const { slug } = await params;
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

        const tag = await Tag.findOneAndDelete({ slug });
        if (!tag) {
            return NextResponse.json({ status: 0, msg: "Tag not found" }, { status: 404 });
        }

        return NextResponse.json({ status: 1, msg: "Tag deleted successfully." });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ status: 0, msg: "Server error" }, { status: 500 });
    }
}
