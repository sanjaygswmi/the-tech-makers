"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, slugify } from "../../../components/utils/utils_bk";
import { showToast } from "../../../components/Toster";
import RichTextEditor from "@/src/app/(admin)/lib/editor/RichTextEditor";

interface TagData {
    title: string;
    slug: string;
    description: string;
    metaTitle: string;
    metaKeyword: string;
    metaDescription: string;
}

interface EditTagProps {
    initialData: TagData;
}

export default function EditTag({ initialData }: EditTagProps) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();

    const [title, setTitle] = useState(initialData.title);
    const [slug, setSlug] = useState(initialData.slug);
    const [description, setDescription] = useState(initialData.description);
    const [metaTitle, setMetaTitle] = useState(initialData.metaTitle);
    const [metaKeyword, setMetaKeyword] = useState(initialData.metaKeyword);
    const [metaDescription, setMetaDescription] = useState(initialData.metaDescription);

    const updateTag = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiBaseUrl}/tags/${slug}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": getToken(),
                },
                body: JSON.stringify({
                    title,
                    slug,
                    description,
                    metaTitle,
                    metaKeyword,
                    metaDescription,
                }),
            });

            const data = await response.json();
            if (data.status === 1) {
                showToast(data.msg, "success");
                router.push("/admin/tag");
            }
        } catch {
            showToast("Internal Server Error", "error");
        }
    };

    return (
        <form onSubmit={updateTag} className="card-content mt-4">
            <div className="flex flex-wrap bg-white py-5 px-3">
                <div className="field w-full md:w-1/2 px-4">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onBlur={() => !slug && setSlug(slugify(title))}
                        />
                    </div>
                </div>
                <div className="field w-full md:w-1/2 px-4">
                    <label className="label">Slug</label>
                    <div className="control">
                        <input className="input" type="text" value={slug} readOnly />
                    </div>
                </div>
                <div className="field w-full px-4">
                    <label className="label">Description</label>
                    <div className="control">
                        <RichTextEditor
                            value={description}
                            onChange={setDescription}
                            minHeight={220}
                            placeholder="Describe the tag in detail..."
                        />
                    </div>
                </div>
                <div className="field w-full md:w-1/2 px-4">
                    <label className="label">Meta Keywords</label>
                    <div className="control">
                        <input
                            className="input"
                            value={metaKeyword}
                            onChange={(e) => setMetaKeyword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field w-full md:w-1/2 px-4">
                    <label className="label">Meta Title</label>
                    <div className="control">
                        <input
                            className="input"
                            value={metaTitle}
                            onChange={(e) => setMetaTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field w-full px-4">
                    <label className="label">Meta Description</label>
                    <div className="control">
                        <textarea
                            className="input"
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="text-right w-full px-3">
                    <input type="submit" className="button blue" value="Update" />
                </div>
            </div>
        </form>
    );
}
