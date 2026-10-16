import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerToken } from "../components/utils/server-utils";
import TagActions from "./components/TagActions";

import {
    Box,
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Pagination,
} from "@mui/material";

export const metadata: Metadata = {
    title: "Tags :: The Tech Makers",
    description: "List and manage tags that appear on the blog posts.",
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
interface Tag {
    _id: string;
    title: string;
    slug: string;
    metaTitle: string;
    metaKeyword: string;
}

const Page = async () => {
    const token = await getServerToken();

    if (!token) {
        redirect("/admin");
    }

    try {
        const response = await fetch(`${apiBaseUrl}/tags?page=1&limit=10`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch tag data");
        }

        const data = await response.json();
        const tags: Tag[] = data.tags || [];
        const totalTags = data.totalTags || 0;
        const totalPages = Math.ceil(totalTags / 10);

        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography variant="h6" fontWeight="bold">
                            Tags
                        </Typography>
                        <Button
                            component={Link}
                            href="/admin/tag/add"
                            variant="contained"
                            color="primary"
                        >
                            New Tag
                        </Button>
                    </Box>

                    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Slug</TableCell>
                                    <TableCell>Meta Title</TableCell>
                                    <TableCell>Meta Keyword</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tags.map((tag) => (
                                    <TableRow key={tag._id}>
                                        <TableCell>{tag.title}</TableCell>
                                        <TableCell>{tag.slug}</TableCell>
                                        <TableCell>{tag.metaTitle}</TableCell>
                                        <TableCell>{tag.metaKeyword}</TableCell>
                                        <TableCell align="right">
                                            <TagActions slug={tag.slug} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
                        <Typography variant="body2">
                            Page 1 of {totalPages}
                        </Typography>
                        <Pagination count={totalPages} page={1} color="primary" />
                    </Box>
                </Paper>
            </Container>
        );
    } catch (error) {
        console.error("Error fetching tag data:", error);
        return (
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Paper sx={{ p: 3, textAlign: "center" }}>
                    <Typography color="error" variant="h6">
                        Failed to load data. Please try again later.
                    </Typography>
                </Paper>
            </Container>
        );
    }
};

export default Page;
