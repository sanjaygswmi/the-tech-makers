import { NextResponse } from 'next/server';
import dbConnect from '@/src/lib/dbConnect';
import Category from '@/src/models/Category';
import auth from '@/src/lib/authMiddleware';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

const hasValidImageSignature = (type, buffer) => {
    if (type === 'image/jpeg') {
        return buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
    }
    if (type === 'image/png') {
        return buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    }
    if (type === 'image/gif') {
        const signature = buffer.subarray(0, 6).toString('ascii');
        return signature === 'GIF87a' || signature === 'GIF89a';
    }
    if (type === 'image/webp') {
        return buffer.length >= 12 &&
            buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
            buffer.subarray(8, 12).toString('ascii') === 'WEBP';
    }
    return false;
};

export async function POST(req) {
    try {
        await dbConnect();

        // Authenticate user using cookies
        const user = await auth(req, ["admin"]);
        if (user.status !== 200) {
            return NextResponse.json(
                { msg: user.msg, status: 0 },
                { status: user.status }
            );
        }

        const formData = await req.formData();

        // Text fields
        const title = formData.get('title');
        const slug = formData.get('slug');
        const description = formData.get('description');
        const metaTitle = formData.get('metaTitle');
        const metaDescription = formData.get('metaDescription');
        const metaKeyword = formData.get('metaKeyword');
        const headerScripts = formData.get('headerScripts');
        const bodyScripts = formData.get('bodyScripts');
        const status = formData.get('status');

        // Check for duplicate slug
        const existingCategory = await Category.findOne({ slug });
        if (existingCategory) {
            return NextResponse.json({ msg: 'Category with this slug already exists', status: 0 }, { status: 400 });
        }

        // Handle image upload
        let filePath = '';
        const file = formData.get('image');
        if (file && typeof file === 'object' && typeof file.arrayBuffer === 'function' && file.size > 0) {
            const allowedTypes = new Map([
                ['image/jpeg', '.jpg'],
                ['image/png', '.png'],
                ['image/webp', '.webp'],
                ['image/gif', '.gif'],
            ]);
            const extension = allowedTypes.get(file.type);
            if (!extension || file.size > 5 * 1024 * 1024) {
                return NextResponse.json(
                    { msg: 'Category image must be a supported image type no larger than 5 MB', status: 0 },
                    { status: 400 }
                );
            }

            const buffer = Buffer.from(await file.arrayBuffer());
            if (!hasValidImageSignature(file.type, buffer)) {
                return NextResponse.json(
                    { msg: 'Category image content does not match its declared image type', status: 0 },
                    { status: 400 }
                );
            }

            const uploadDir = path.join(process.cwd(), 'public', 'upload', 'categories');
            await fs.mkdir(uploadDir, { recursive: true });

            const fileName = `${randomUUID()}${extension}`;
            await fs.writeFile(path.join(uploadDir, fileName), buffer, { flag: 'wx' });
            filePath = `/upload/categories/${fileName}`;
        }

        // Create new category
        const category = new Category({
            title,
            slug,
            description,
            metaTitle,
            metaDescription,
            metaKeyword,
            headerScripts,
            bodyScripts,
            status,
            image: filePath,
        });

        await category.save();
        return NextResponse.json({ msg: 'Category created successfully.', status: 1 }, { status: 201 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ msg: 'Server error', status: 0 }, { status: 500 });
    }
}

export async function GET(req) {
    try {
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

        const totalCategory = await Category.countDocuments();
        const categories = await Category.find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .select('title slug description metaTitle metaDescription metaKeyword status image createdAt updatedAt');

        return NextResponse.json({
            totalCategory,
            currentPage: page,
            totalPages: Math.ceil(totalCategory / limit),
            categories,
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ msg: 'Server error', status: 0 }, { status: 500 });
    }
}


