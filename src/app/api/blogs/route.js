import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';
import dbConnect from '@/src/lib/dbConnect';
import Blog from '@/src/models/Blog';
import auth from '@/src/lib/authMiddleware';
import { servicedata } from '@/src/components/Services Page/servicedata';

const hasValidImageSignature = (type, buffer) => {
    if (type === "image/jpeg") {
        return buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
    }
    if (type === "image/png") {
        return buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    }
    if (type === "image/gif") {
        const signature = buffer.subarray(0, 6).toString("ascii");
        return signature === "GIF87a" || signature === "GIF89a";
    }
    if (type === "image/webp") {
        return buffer.length >= 12 &&
            buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
            buffer.subarray(8, 12).toString("ascii") === "WEBP";
    }
    return false;
};

export async function GET(req) {
    const authResponse = await auth(req, ["admin"]);
    if (authResponse.status !== 200) {
        return NextResponse.json({ msg: authResponse.msg }, { status: authResponse.status });
    }

    await dbConnect();
    const { searchParams } = new URL(req.url);
    const pageValue = searchParams.get("page");
    const limitValue = searchParams.get("limit");
    const page = pageValue === null ? 1 : Number(pageValue);
    const limit = limitValue === null ? 9 : Number(limitValue);
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

    try {
        const totalBlogs = await Blog.countDocuments();
        const blogs = await Blog.find()
            .sort({ createdAt: -1 })
            .skip(startIndex)
            .limit(limit);

        return NextResponse.json({
            totalBlogs,
            currentPage: page,
            totalPages: Math.ceil(totalBlogs / limit),
            blogs
        });
    } catch (error) {
        return NextResponse.json({ msg: 'Server error', status: 0 }, { status: 500 });
    }
}

export async function POST(req) {
    await dbConnect();

    const authResponse = await auth(req, ["admin"]); // Only admins may create or edit blog content
    if (authResponse.status !== 200) {
        return NextResponse.json({ msg: authResponse.msg }, { status: authResponse.status });
    }

    try {
        const formData = await req.formData();

        // Text fields
        const title           = formData.get("title");
        const slug            = formData.get("slug");
        const short_desc      = formData.get("short_desc");
        const content         = formData.get("content");
        const category        = (formData.getAll("category") || []).filter((value) => typeof value === "string" && value.trim());
        const tag             = formData.getAll("tag") || [];
        const serviceSlugs    = [...new Set(formData.getAll("serviceSlugs").filter((value) => typeof value === "string").map((value) => value.trim().toLowerCase()).filter(Boolean))];
        const metaTitle       = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        const metaKeyword     = formData.get("metaKeyword");
        const headerScripts   = formData.get("headerScripts");
        const bodyScripts     = formData.get("bodyScripts");
        const status          = formData.get("status");

        const validServiceSlugs = new Set(servicedata.map((service) => service.slug));
        if (serviceSlugs.some((serviceSlug) => !validServiceSlugs.has(serviceSlug))) {
            return NextResponse.json({ msg: "Invalid service association" }, { status: 400 });
        }

        // Check duplicate slug
        let existingBlog = await Blog.findOne({ slug });
        if (existingBlog) {
            return NextResponse.json(
                { msg: "Blog post with this slug already exists" },
                { status: 400 }
            );
        }

        // Handle optional blog image using a generated filename, not user-controlled path data.
        let filePath = "";
        const file = formData.get("image");
        if (file && typeof file === "object" && typeof file.arrayBuffer === "function" && file.size > 0) {
            const allowedTypes = new Map([
                ["image/jpeg", ".jpg"],
                ["image/png", ".png"],
                ["image/webp", ".webp"],
                ["image/gif", ".gif"],
            ]);
            const extension = allowedTypes.get(file.type);
            if (!extension || file.size > 5 * 1024 * 1024) {
                return NextResponse.json(
                    { msg: "Blog image must be a supported image type no larger than 5 MB", status: 0 },
                    { status: 400 }
                );
            }

            const buffer = Buffer.from(await file.arrayBuffer());
            if (!hasValidImageSignature(file.type, buffer)) {
                return NextResponse.json(
                    { msg: "Blog image content does not match its declared image type", status: 0 },
                    { status: 400 }
                );
            }

            const uploadDir = path.join(process.cwd(), "public", "upload", "blogs");
            await fs.mkdir(uploadDir, { recursive: true });

            const fileName = `${randomUUID()}${extension}`;
            await fs.writeFile(path.join(uploadDir, fileName), buffer, { flag: "wx" });
            filePath = `/upload/blogs/${fileName}`;
        }

        // Create new blog
        const newBlog = new Blog({
            title,
            slug,
            image: filePath,
            short_desc,
            content,
            category,
            tag,
            serviceSlugs,
            metaTitle,
            metaDescription,
            metaKeyword,
            headerScripts,
            bodyScripts,
            status,
        });

        await newBlog.save();
        return NextResponse.json(
            { msg: "Blog post successful", status: 1 },
            { status: 201 }
        );
    } catch (error) {
        console.error("Blog creation or upload failed");
        return NextResponse.json(
            { msg: "File upload error", status: 0 },
            { status: 500 }
        );
    }
}
