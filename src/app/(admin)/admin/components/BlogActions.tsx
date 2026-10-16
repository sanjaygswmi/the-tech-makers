"use client";

import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

interface BlogActionsProps {
    id: string;
}

const BlogActions: React.FC<BlogActionsProps> = ({ id }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/blogs/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to delete blog");
            }

            const data = await response.json();
            console.log("Blog deleted:", data.msg);
            // Optionally, refresh the page or update the state to reflect the deletion
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <Stack direction="row" spacing={1}>
            <IconButton
                size="small"
                color="error"
                aria-label="delete"
                onClick={handleDelete}
            >
                <DeleteIcon />
            </IconButton>
            <IconButton
                size="small"
                color="primary"
                aria-label="edit"
                component={Link}
                href={`/admin/blog/edit/${id}`}
            >
                <EditIcon />
            </IconButton>
        </Stack>
    );
};

export default BlogActions;
