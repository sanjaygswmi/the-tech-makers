"use client";

import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

interface TagActionsProps {
    slug: string;
}

const TagActions: React.FC<TagActionsProps> = ({ slug }) => {
    async function handleDelete(currentSlug: string): Promise<void> {
        if (!confirm("Are you sure you want to delete this tag?")) return;

        try {
            const res = await fetch(`/api/tags/${currentSlug}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(errText || `Request failed with status ${res.status}`);
            }

            alert("Tag deleted.");
            window.location.reload();
        } catch (error) {
            console.error("Failed to delete tag:", error);
            alert("Failed to delete the tag. Please try again.");
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
                href={`/admin/tag/edit/${slug}`}
            >
                <EditIcon />
            </IconButton>
        </Stack>
    );
};

export default TagActions;
