"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { slugify } from "../../components/utils/client-utils";
import { showToast } from "../../components/Toster";
import MetaField from "../../components/MetaFields";
import { deleteCookie } from "cookies-next";

import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

interface CategoryFormProps {
    initialData?: {
        title: string;
        slug: string;
        description: string;
        metaTitle: string;
        metaKeyword: string;
        metaDescription: string;
        image: string;
        headerScripts: string;
        bodyScripts: string;
        status: string;
    };
}

const CategoryForm: React.FC<CategoryFormProps> = ({ initialData }) => {
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
    const [status, setStatus] = useState(initialData?.status || "active");
    const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);

    const handleSlug = (newTitle: string) => {
        if (initialData) return;
        setSlug(slugify(newTitle));
    };

    const submitCategory = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!title || !description) {
            showToast("Title and Description are required.", "error");
            return;
        }

        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch(
                `${apiBaseUrl}/category${initialData ? `/${initialData.slug}` : ""}`,
                {
                    method: initialData ? "PUT" : "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (response.ok) {
                showToast(result.msg || "Category saved.", "success");
                router.push("/admin/category");
            } else {
                if (response.status === 401) {
                    deleteCookie("token");
                    router.push("/admin");
                } else {
                    showToast(result.msg || "Failed to save category.", "error");
                }
            }
        } catch (error) {
            console.error("Error saving category:", error);
            showToast("An error occurred while saving the category.", "error");
        }
    };

    return (
        <form onSubmit={submitCategory}>
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

                {/* Image */}
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Image
                    </Typography>
                    <Button variant="contained" component="label">
                        Upload
                        <input
                            type="file"
                            name="image"
                            hidden
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const reader = new FileReader();
                                reader.onloadend = () => setImagePreview(reader.result as string);
                                reader.readAsDataURL(file);
                            }}
                        />
                    </Button>
                    {imagePreview && (
                        <Box mt={2}>
                            <Image
                                src={imagePreview}
                                alt="Selected"
                                width={200}
                                height={200}
                                style={{ borderRadius: 8, objectFit: "cover" }}
                            />
                        </Box>
                    )}
                </Box>

                {/* Description */}
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Description
                    </Typography>
                    <TextField
                        name="description"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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

                {/* Status */}
                <FormControl sx={{ width: 200 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as string)}
                        label="Status"
                        required
                    >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                    </Select>
                </FormControl>

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

export default CategoryForm;
