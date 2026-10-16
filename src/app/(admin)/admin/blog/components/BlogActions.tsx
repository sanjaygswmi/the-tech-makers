"use client";

import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

interface BlogActionsProps {
    slug: string;
}

const BlogActions: React.FC<BlogActionsProps> = ({ slug }) => {

    async function handleDelete(slug: string): Promise<void> {
        if (!confirm("Are you sure you want to delete this blog post?")) return;
    
        try {
            const res = await fetch(`/api/blogs/${slug}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
    
            if (!res.ok) {
                const errText = await res.text();
                throw new Error(errText || `Request failed with status ${res.status}`);
            }
    
            alert("Blog post deleted.");
            // Refresh the page to reflect deletion; adapt as needed (router push, revalidation, etc.)
            window.location.reload();
        } catch (error) {
            // Keep message generic for users; log detailed error for debugging
            console.error("Failed to delete blog post:", error);
            alert("Failed to delete the blog post. Please try again.");
        }
    }

    return (
        <Stack direction="row" spacing={1}>
            <IconButton
                size="small"
                color="error"
                aria-label="delete"
                onClick={() => handleDelete(slug)}
            >
                <DeleteIcon />
            </IconButton>
            <IconButton
                size="small"
                color="primary"
                aria-label="edit"
                component={Link}
                href={`/admin/blog/edit/${slug}`}
            >
                <EditIcon />
            </IconButton>
        </Stack>
    );
};

export default BlogActions;



