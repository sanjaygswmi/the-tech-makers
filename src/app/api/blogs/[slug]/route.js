import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';
import dbConnect from '@/src/lib/dbConnect';
import Blog from '@/src/models/Blog';
import auth from '@/src/lib/authMiddleware';
import { servicedata } from '@/src/components/Services Page/servicedata';

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

const saveImage = async (file) => {
  if (!file || typeof file !== 'object' || typeof file.arrayBuffer !== 'function' || file.size === 0) {
    return null;
  }

  const allowedTypes = new Map([
    ['image/jpeg', '.jpg'],
    ['image/png', '.png'],
    ['image/webp', '.webp'],
    ['image/gif', '.gif'],
  ]);
  const extension = allowedTypes.get(file.type);
  if (!extension || file.size > 5 * 1024 * 1024) {
    throw new Error('Blog image must be a supported image type no larger than 5 MB');
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  if (!hasValidImageSignature(file.type, buffer)) {
    const error = new Error('Blog image content does not match its declared image type');
    error.status = 400;
    throw error;
  }

  const uploadDir = path.join(process.cwd(), 'public', 'upload', 'blogs');
  await fs.mkdir(uploadDir, { recursive: true });
  const fileName = `${randomUUID()}${extension}`;
  const filePath = path.join(uploadDir, fileName);
  await fs.writeFile(filePath, buffer, { flag: 'wx' });
  return `/upload/blogs/${fileName}`;
};

export async function GET(req, context) {
  const authResponse = await auth(req, ["admin"]);
  if (authResponse.status !== 200) {
    return NextResponse.json({ msg: authResponse.msg }, { status: authResponse.status });
  }

  await dbConnect();

  const resolvedParams = await context?.params;
  const slug = resolvedParams?.slug;
  if (!slug) {
    return NextResponse.json({ msg: 'Slug is required' }, { status: 400 });
  }

  try {
    const blog = await Blog.findOne({ slug })
      .populate({
        path: 'category',
        select: 'title name slug',
      })
      .lean();
    if (!blog) {
      return NextResponse.json({ msg: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error('Blog detail error', error);
    return NextResponse.json({ msg: 'Unable to load blog' }, { status: 500 });
  }
}

export async function PUT(req, context) {
  await dbConnect();

  const authResponse = await auth(req, ["admin"]);
  if (authResponse.status !== 200) {
    return NextResponse.json({ msg: authResponse.msg }, { status: authResponse.status });
  }

  const resolvedParams = await context?.params;
  const slug = resolvedParams?.slug;
  if (!slug) {
    return NextResponse.json({ msg: 'Slug is required' }, { status: 400 });
  }

  try {
    const formData = await req.formData();
    const updates = {};

    const fields = [
      'title',
      'short_desc',
      'content',
      'metaTitle',
      'metaDescription',
      'metaKeyword',
      'headerScripts',
      'bodyScripts',
      'status',
    ];

    for (const field of fields) {
      const value = formData.get(field);
      if (typeof value === 'string' && value.trim() !== '') {
        updates[field] = value;
      }
    }

    const newSlug = formData.get('slug');
    if (typeof newSlug === 'string' && newSlug.trim()) {
      const normalizedSlug = newSlug.trim();
      if (normalizedSlug !== slug) {
        const slugExists = await Blog.findOne({ slug: normalizedSlug });
        if (slugExists) {
          return NextResponse.json(
            { msg: 'A blog with that slug already exists' },
            { status: 400 }
          );
        }
        updates.slug = normalizedSlug;
      }
    }

    if (formData.has('category')) {
      updates.category = formData.getAll('category').filter(Boolean);
    }

    const tag = formData.getAll('tag')?.filter(Boolean);
    if (tag.length) {
      updates.tag = tag;
    }

    if (formData.has('serviceSlugs')) {
      const serviceSlugs = [...new Set(
        formData.getAll('serviceSlugs')
          .filter((value) => typeof value === 'string')
          .map((value) => value.trim().toLowerCase())
          .filter(Boolean)
      )];
      const validServiceSlugs = new Set(servicedata.map((service) => service.slug));
      if (serviceSlugs.some((serviceSlug) => !validServiceSlugs.has(serviceSlug))) {
        return NextResponse.json({ msg: 'Invalid service association', status: 400 });
      }
      updates.serviceSlugs = serviceSlugs;
    }

    const image = await saveImage(formData.get('image'));
    if (image) {
      updates.image = image;
    }

    const updatedBlog = await Blog.findOneAndUpdate({ slug }, updates, { new: true });
    if (!updatedBlog) {
      return NextResponse.json({ msg: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ msg: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    if (error?.status === 400) {
      return NextResponse.json({ msg: error.message, status: 0 }, { status: 400 });
    }
    console.error('Blog update error', error);
    return NextResponse.json({ msg: 'Unable to update blog', status: 0 }, { status: 500 });
  }
}
