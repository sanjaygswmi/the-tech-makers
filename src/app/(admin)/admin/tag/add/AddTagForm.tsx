"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { slugify, getToken } from "../../components/utils/utils_bk";
import { showToast } from "../../components/Toster";
import RichTextEditor from "@/src/app/(admin)/lib/editor/RichTextEditor";

export default function AddTagForm() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaKeyword, setMetaKeyword] = useState("");
    const [metaDescription, setMetaDescription] = useState("");

    const handleSlug = () => {
        if (!slug) {
            setSlug(slugify(title));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const tagData = {
            title,
            slug,
            description,
            metaTitle,
            metaKeyword,
            metaDescription,
        };

        try {
            const response = await fetch(`${apiBaseUrl}/tags`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${getToken()}`,
                },
                body: JSON.stringify(tagData),
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
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap bg-white py-[20px] px-[10px]">
                <div className="field w-full md:w-1/2 px-4">
                    <label className="label">Title</label>
                    <input
                        className="input"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={handleSlug}
                    />
                </div>

                <div className="field w-full md:w-1/2 px-4">
                    <label className="label">Slug</label>
                    <input className="input" type="text" value={slug} name="slug" placeholder="Slug" readOnly />
                </div>

                <div className="field w-full px-4">
                    <label className="label">Description</label>
                    <RichTextEditor
                        value={description}
                        onChange={setDescription}
                        minHeight={220}
                        placeholder="Share a short description for the tag..."
                    />
                </div>

                <div className="field w-full md:w-1/2 px-4">
                    <label className="label">Meta Keywords</label>
                    <input className="input" name="metaKeyword" value={metaKeyword} onChange={(e) => setMetaKeyword(e.target.value)} placeholder="Meta keywords" />
                </div>

                <div className="field w-full md:w-1/2 px-4">
                    <label className="label">Meta Title</label>
                    <input className="input" name="metaTitle" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="Meta title" />
                </div>

                <div className="field w-full px-4">
                    <label className="label">Meta Descriptions</label>
                    <textarea className="input" name="metaDescription" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="Meta descriptions"></textarea>
                </div>

                <div className="text-right w-full px-[10px]">
                    <button type="submit" className="button blue">Submit</button>
                </div>
            </div>
        </form>
    );
}
