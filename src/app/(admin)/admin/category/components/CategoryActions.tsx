"use client";

import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

interface CategoryActionsProps {
    slug: string;
}

const CategoryActions: React.FC<CategoryActionsProps> = ({ slug }) => {
    async function handleDelete(currentSlug: string): Promise<void> {
        if (!confirm("Are you sure you want to delete this category?")) return;

        try {
            const res = await fetch(`/api/category/${currentSlug}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(errText || `Request failed with status ${res.status}`);
            }

            alert("Category deleted.");
            window.location.reload();
        } catch (error) {
            console.error("Failed to delete category:", error);
            alert("Failed to delete the category. Please try again.");
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
                href={`/admin/category/edit/${slug}`}
            >
                <EditIcon />
            </IconButton>
        </Stack>
    );
};

export default CategoryActions;
