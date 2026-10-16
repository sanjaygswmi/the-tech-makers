import { NextResponse } from "next/server";
import dbConnect from "@/src/lib/dbConnect";
import Blog from "@/src/models/Blog";
import auth from "@/src/lib/authMiddleware";

export const dynamic = "force-dynamic";

const csvCell = (value) => {
    let text = "";

    if (value === null || value === undefined) {
        text = "";
    } else if (Array.isArray(value)) {
        text = value.map((item) => {
            if (item && typeof item === "object") {
                return item.title || item.slug || String(item._id || "");
            }
            return String(item);
        }).join("; ");
    } else if (value instanceof Date) {
        text = value.toISOString();
    } else if (typeof value === "object") {
        text = value.title || value.slug || String(value._id || "");
    } else {
        text = String(value);
    }

    // Prevent spreadsheet formula execution when an exported CSV is opened.
    if (/^[\s\u0000-\u001f]*[=+@-]/.test(text)) {
        text = "'" + text;
    }

    return '"' + text.replace(/"/g, '""') + '"';
};

export async function GET(req) {
    const authResponse = await auth(req, ["admin"]);
    if (authResponse.status !== 200) {
        return NextResponse.json(
            { msg: authResponse.msg },
            { status: authResponse.status }
        );
    }

    try {
        await dbConnect();

        const blogs = await Blog.find({})
            .sort({ createdAt: -1 })
            .populate("category", "_id title slug")
            .populate("tag", "_id title slug")
            .lean();

        const columns = [
            ["title", "Title"],
            ["slug", "Slug"],
            ["status", "Status"],
            ["createdAt", "Created At"],
            ["updatedAt", "Updated At"],
            ["category", "Categories"],
            ["tag", "Tags"],
            ["serviceSlugs", "Associated Service Slugs"],
            ["short_desc", "Short Description"],
            ["content", "Content HTML"],
            ["metaTitle", "Meta Title"],
            ["metaDescription", "Meta Description"],
            ["metaKeyword", "Meta Keywords"],
            ["image", "Image Path"],
        ];

        const rows = [
            columns.map(([, heading]) => csvCell(heading)).join(","),
            ...blogs.map((blog) =>
                columns.map(([field]) => csvCell(blog[field])).join(",")
            ),
        ];

        const csv = "\uFEFF" + rows.join("\r\n");
        const date = new Date().toISOString().slice(0, 10);

        return new Response(csv, {
            status: 200,
            headers: {
                "Content-Type": "text/csv; charset=utf-8",
                "Content-Disposition": `attachment; filename="the-tech-makers-blog-inventory-${date}.csv"`,
                "Cache-Control": "private, no-store, max-age=0",
                "X-Content-Type-Options": "nosniff",
            },
        });
    } catch (error) {
        console.error("Blog inventory export failed");
        return NextResponse.json(
            { msg: "Unable to export blog inventory" },
            { status: 500 }
        );
    }
}
