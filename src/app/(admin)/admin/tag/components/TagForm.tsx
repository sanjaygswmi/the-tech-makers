"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "../../components/utils/client-utils";
import { showToast } from "../../components/Toster";
import MetaField from "../../components/MetaFields";
import { deleteCookie } from "cookies-next";
import RichTextEditor from "../../../lib/editor/RichTextEditor";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

interface TagFormProps {
    initialData?: {
        title: string;
        slug: string;
        description: string;
        metaTitle: string;
        metaKeyword: string;
        metaDescription: string;
        headerScripts: string;
        bodyScripts: string;
    };
}

const TagForm: React.FC<TagFormProps> = ({ initialData }) => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();

    const [title, setTitle] = useState(initialData?.title || "");
    const [slug, setSlug] = useState(initialData?.slug || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || "");
    const [metaKeyword, setMetaKeyword] = useState(initialData?.metaKeyword || "");
    const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || "");
    const [headerScripts, setHeaderScripts] = useState(initialData?.headerScripts || "");
    const [bodyScripts, setBodyScripts] = useState(initialData?.bodyScripts || "");

    const handleSlug = (newTitle: string) => {
        if (initialData) return;
        setSlug(slugify(newTitle));
    };

    const submitTag = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!title || !description) {
            showToast("Title and Description are required.", "error");
            return;
        }

        try {
            const response = await fetch(
                `${apiBaseUrl}/tags${initialData ? `/${initialData.slug}` : ""}`,
                {
                    method: initialData ? "PUT" : "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title,
                        slug,
                        description,
                        metaTitle,
                        metaKeyword,
                        metaDescription,
                        headerScripts,
                        bodyScripts,
                    }),
                }
            );

            const result = await response.json();

            if (response.ok) {
                showToast(result.msg || "Tag saved.", "success");
                router.push("/admin/tag");
            } else {
                if (response.status === 401) {
                    deleteCookie("token");
                    router.push("/admin");
                } else {
                    showToast(result.msg || "Failed to save tag.", "error");
                }
            }
        } catch (error) {
            console.error("Error saving tag:", error);
            showToast("An error occurred while saving the tag.", "error");
        }
    };

    return (
        <form onSubmit={submitTag}>
            <Stack spacing={3}>
                {/* Title + Slug */}
                <Box display="flex" gap={2}>
                    <TextField
                        label="Title"
                        name="title"
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            handleSlug(e.target.value);
                        }}
                    />
                    <TextField
                        label="Slug"
                        name="slug"
                        fullWidth
                        required
                        value={slug}
                        slotProps={{ input: { readOnly: true } }}
                    />
                </Box>

                {/* Description */}
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Description
                    </Typography>
                    <RichTextEditor
                        value={description}
                        onChange={(value) => setDescription(value)}
                        minHeight={220}
                        placeholder="Explain what this tag represents..."
                    />
                </Box>

                {/* Meta Title + Meta Keywords */}
                <Box className="flex gap-4">
                    <Box className="flex-1">
                        <MetaField
                            label="Meta Title"
                            name="metaTitle"
                            type="title"
                            value={metaTitle}
                            onChange={setMetaTitle}
                        />
                    </Box>
                    <Box className="flex-1">
                        <MetaField
                            label="Meta Keywords"
                            name="metaKeyword"
                            type="keywords"
                            value={metaKeyword}
                            onChange={setMetaKeyword}
                        />
                    </Box>
                </Box>

                {/* Meta Description */}
                <MetaField
                    label="Meta Description"
                    name="metaDescription"
                    type="description"
                    value={metaDescription}
                    onChange={setMetaDescription}
                />

                {/* Header Scripts */}
                <TextField
                    label="Header Scripts"
                    name="headerScripts"
                    multiline
                    rows={4}
                    value={headerScripts}
                    onChange={(e) => setHeaderScripts(e.target.value)}
                />

                {/* Body Scripts */}
                <TextField
                    label="Body Scripts"
                    name="bodyScripts"
                    multiline
                    rows={4}
                    value={bodyScripts}
                    onChange={(e) => setBodyScripts(e.target.value)}
                />

                {/* Submit */}
                <Box textAlign="right">
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </Stack>
        </form>
    );
};

export default TagForm;
