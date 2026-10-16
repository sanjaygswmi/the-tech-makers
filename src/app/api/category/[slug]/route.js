import { NextResponse } from "next/server";
import dbConnect from "@/src/lib/dbConnect";
import Category from "@/src/models/Category";
import auth from "@/src/lib/authMiddleware";
import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

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

export async function GET(req, { params }) {
    const { slug } = await params;
    const authResponse = await auth(req, ["admin"]);
    if (authResponse.status !== 200) {
        return NextResponse.json({ msg: authResponse.msg }, { status: authResponse.status });
    }

    try {
        await dbConnect();
        const category = await Category.findOne({ slug: slug });

        if (!category) {
            return NextResponse.json({ msg: 'Category not found', status: 0 }, { status: 404 });
        }

        return NextResponse.json({ data: category, status: 1 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ msg: 'Server error', status: 0 }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    const { slug } = await params;
    try {
        await dbConnect();
        const user = await auth(req, ["admin"]);
        if (user.status !== 200) {
            return NextResponse.json(
                { msg: user.msg, status: 0 },
                { status: user.status }
            );
        }

        const formData = await req.formData();
        const title = formData.get("title");
        const description = formData.get("description");
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        const metaKeyword = formData.get("metaKeyword");
        const headerScripts = formData.get("headerScripts");
        const bodyScripts = formData.get("bodyScripts");
        const status = formData.get("status");

        const category = await Category.findOne({ slug: slug });

        if (!category) {
            return NextResponse.json({ msg: 'Category not found', status: 0 }, { status: 404 });
        }

        let filePath = category.image || "";
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
                    { msg: "Category image must be a supported image type no larger than 5 MB", status: 0 },
                    { status: 400 }
                );
            }

            const buffer = Buffer.from(await file.arrayBuffer());
            if (!hasValidImageSignature(file.type, buffer)) {
                return NextResponse.json(
                    { msg: "Category image content does not match its declared image type", status: 0 },
                    { status: 400 }
                );
            }

            const uploadDir = path.join(process.cwd(), "public", "upload", "categories");
            await fs.mkdir(uploadDir, { recursive: true });

            const fileName = `${randomUUID()}${extension}`;
            await fs.writeFile(path.join(uploadDir, fileName), buffer, { flag: "wx" });

            // Delete only a previously stored file that resolves inside the category upload directory.
            if (filePath && filePath.startsWith("/upload/categories/")) {
                const oldFilePath = path.resolve(process.cwd(), "public", filePath.slice(1));
                if (oldFilePath.startsWith(uploadDir + path.sep)) {
                    try {
                        await fs.unlink(oldFilePath);
                    } catch {
                        // A missing old file should not prevent the category update.
                    }
                }
            }

            filePath = `/upload/categories/${fileName}`;
        }

        category.title = title || category.title;
        category.description = description || category.description;
        category.metaTitle = metaTitle || category.metaTitle;
        category.metaDescription = metaDescription || category.metaDescription;
        category.metaKeyword = metaKeyword || category.metaKeyword;
        category.headerScripts = headerScripts || category.headerScripts;
        category.bodyScripts = bodyScripts || category.bodyScripts;
        category.status = status || category.status;
        category.image = filePath;

        await category.save();

        return NextResponse.json({ msg: 'Category updated successfully.', status: 1 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ msg: 'Server error', status: 0 }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    const { slug } = await params;
    try {
        await dbConnect();
        const user = await auth(req, ["admin"]);
        if (user.status !== 200) {
            return NextResponse.json(
                { msg: user.msg, status: 0 },
                { status: user.status }
            );
        }

        const category = await Category.findOneAndDelete({ slug: slug });

        if (!category) {
            return NextResponse.json({ msg: 'Category not found', status: 0 }, { status: 404 });
        }

        return NextResponse.json({ msg: 'Category deleted successfully.', status: 1 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ msg: 'Server error', status: 0 }, { status: 500 });
    }
}
