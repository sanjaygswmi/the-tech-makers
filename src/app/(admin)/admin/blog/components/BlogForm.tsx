"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { slugify } from "../../components/utils/client-utils";
import { showToast } from "../../components/Toster";
import MetaField from "../../components/MetaFields";
import { deleteCookie } from "cookies-next";
import RichTextEditor from "@/src/app/(admin)/lib/editor/RichTextEditor"
import { getServiceSlugsForCategory } from "@/src/lib/blog-service-mapping"
// ✅ MUI imports
import {
    Box,
    Button,
    TextField,
    Autocomplete,
    Typography,
    FormControlLabel,
    Checkbox,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Stack,
} from "@mui/material";

interface Tag {
    _id: string;
    title: string;
    slug: string;
}

interface ServiceOption {
    slug: string;
    title: string;
}

interface Category {
    _id: string;
    title: string;
    slug: string;
}

interface BlogFormProps {
    categoryData: Category[];
    tagData: Tag[];
    serviceData: ServiceOption[];
    initialData?: {
        title: string;
        slug: string;
        short_desc: string;
        content: string;
        metaTitle: string;
        metaKeyword: string;
        metaDescription: string;
        headerScripts: string;
        bodyScripts: string;
        status: string;
        image: string;
        tag: string[];
        category: string[];
        serviceSlugs?: string[];
    };
}

const BlogForm: React.FC<BlogFormProps> = ({ categoryData, tagData, serviceData, initialData }) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();

    // State variables
    const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [selectedServiceSlugs, setSelectedServiceSlugs] = useState<string[]>(initialData?.serviceSlugs || []);
    const [title, setTitle] = useState(initialData?.title || "");
    const [slug, setSlug] = useState(initialData?.slug || "");
    const [shortDesc, setShortDesc] = useState(initialData?.short_desc || "");
    const [content, setContent] = useState(initialData?.content || "");
    const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || "");
    const [metaKeyword, setMetaKeyword] = useState(initialData?.metaKeyword || "");
    const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || "");
    const [headerScripts, setHeaderScripts] = useState(initialData?.headerScripts || "");
    const [bodyScripts, setBodyScripts] = useState(initialData?.bodyScripts || "");
    const [status, setStatus] = useState(initialData?.status || "active");
    const [selectedCategoryId, setSelectedCategoryId] = useState<string[]>(
        initialData?.category || []
    );

    // Map initial tags to tag objects
    useEffect(() => {
        console.log("initialData?.tag", initialData?.tag);
        console.log("initialData", initialData);
        if (initialData?.tag && tagData.length) {
            const mappedTags = tagData?.filter((tag) => initialData.tag.includes(tag._id));
            setSelectedTags(mappedTags);
        }
    }, [initialData, initialData?.tag, tagData]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSlug = (newTitle: string) => {
        if( initialData ) return; // Prevent slug change if editing 
        setSlug(slugify(newTitle));
    };

    const uploadBlogPost = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title || !shortDesc || !content) {
            showToast("Title, Short Description, and Content are required.", "error");
            return;
        }

        const formData = new FormData(event.currentTarget);
        formData.delete("tag");
        selectedTags.forEach((tag) => formData.append("tag", tag._id));
        formData.set("serviceSlugs", "");
        selectedServiceSlugs.forEach((serviceSlug) => formData.append("serviceSlugs", serviceSlug));
        formData.delete("category");
        formData.set("category", "");
        selectedCategoryId.forEach((categoryId) => formData.append("category", categoryId));
        formData.set("content", content);

        try {
            const response = await fetch(
                `${baseUrl}/blogs${initialData ? `/${initialData.slug}` : ""}`, // Use /blogs/slug for editing
                {
                    method: initialData ? "PUT" : "POST", // Use PUT for editing, POST for adding
                    body: formData,
                }
            );
            const result = await response.json();

            if (response.ok) {
                showToast(result.msg, "success");
                router.push("/admin/blog");
            } else {
                if (response.status === 401) {
                    // Clear cookies and redirect to login
                    deleteCookie("token");
                    router.push("/admin");
                } else {
                    showToast(result.msg || "Failed to upload blog post.", "error");
                }
            }
        } catch (error) {
            console.error("Error:", error);
            showToast("An error occurred while uploading the blog post.", "error");
        }
    };

    return (
        <form onSubmit={uploadBlogPost}>
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
                        slotProps={{ input: {readOnly: true }}}
                    />
                </Box>

                {/* Service associations */}
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Related services
                    </Typography>
                    <Autocomplete
                        multiple
                        options={serviceData}
                        sx={{ width: "100%" }}
                        getOptionLabel={(option) => option?.title || option?.slug || ""}
                        isOptionEqualToValue={(option, value) => option.slug === value.slug}
                        value={serviceData.filter((service) => selectedServiceSlugs.includes(service.slug))}
                        onChange={(_, newValue) => setSelectedServiceSlugs(newValue.map((service) => service.slug))}
                        renderInput={(params) => (
                            <TextField {...params} label="Assign to services" placeholder="Choose relevant services" />
                        )}
                    />
                    <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
                        <Button
                            type="button"
                            variant="outlined"
                            size="small"
                            onClick={() => {
                                const suggestedSlugs = categoryData
                                    .filter((category) => selectedCategoryId.includes(category._id))
                                    .flatMap((category) => getServiceSlugsForCategory(category));
                                setSelectedServiceSlugs((current) => [
                                    ...Array.from(new Set([...current, ...suggestedSlugs])),
                                ]);
                            }}
                        >
                            Suggest services from categories
                        </Button>
                        <Typography variant="caption" color="text.secondary">
                            Only assign services that this article genuinely supports. Suggestions are additive; assigned posts can appear on those service pages.
                        </Typography>
                    </Stack>
                </Box>

                {/* Tags + Image */}
                <Box display="flex" gap={2}>
                    <Autocomplete
                        multiple
                        options={tagData}
                        sx={{ flex: 1 }}
                        getOptionLabel={(option) => option?.title || ""}
                        isOptionEqualToValue={(option, value) => option._id === value._id}
                        value={selectedTags} // Ensure selected tags are shown
                        onChange={(_, newValue) => setSelectedTags(newValue)}
                        renderInput={(params) => (
                            <TextField {...params} label="Tags" placeholder="Select tags" />
                        )}
                    />

                    <Box flex={1}>
                        <Typography variant="subtitle1" gutterBottom>
                            Image
                        </Typography>
                        <Button variant="contained" component="label">
                            Upload
                            <input
                                type="file"
                                name="image"
                                hidden
                                onChange={handleImageChange}
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
                </Box>

                {/* Categories */}
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Categories
                    </Typography>
                    {categoryData.length ? (
                        categoryData.map((item) => (
                            <FormControlLabel
                                key={item._id}
                                control={
                                    <Checkbox
                                        name="category"
                                        value={item._id}
                                        color="primary"
                                        checked={selectedCategoryId.includes(item._id)}
                                        onChange={(e) => {
                                            const { value, checked } = e.target;
                                            const nextCategoryIds = checked
                                                ? [...selectedCategoryId, value]
                                                : selectedCategoryId.filter((id) => id !== value);
                                            setSelectedCategoryId(nextCategoryIds);

                                            // Category mappings only suggest additions. Existing/manual service
                                            // associations are preserved so category edits never silently remove them.
                                            const suggestedSlugs = categoryData
                                                .filter((category) => nextCategoryIds.includes(category._id))
                                                .flatMap((category) => getServiceSlugsForCategory(category));
                                            setSelectedServiceSlugs((current) => [
                                                ...Array.from(new Set([...current, ...suggestedSlugs])),
                                            ]);
                                        }}
                                    />
                                }
                                label={item.title}
                            />
                        ))
                    ) : (
                        <Typography color="text.secondary">No categories found</Typography>
                    )}
                    <Typography variant="caption" color="text.secondary" display="block">
                        Selecting a category suggests its mapped services above. Suggestions are additive; review the service list and remove any that do not fit this article.
                    </Typography>
                </Box>

                {/* Description */}
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Short Description
                    </Typography>
                    <textarea
                        id="short_desc"
                        name="short_desc"
                        value={shortDesc}
                        onChange={(e) => setShortDesc(e.target.value)}
                        style={{ width: "100%", minHeight: 80, padding: "8px" }}
                        required
                    />
                </Box>

                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Content
                    </Typography>
                    <RichTextEditor
                        value={content}
                        onChange={(value) => setContent(value)}
                        minHeight={300}
                        placeholder="Share the story behind this blog post..."
                    />
                </Box>



                {/* Meta Title + Meta Keyword */}
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

export default BlogForm;
