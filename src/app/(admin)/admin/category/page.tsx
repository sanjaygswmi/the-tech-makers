import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerToken } from "../components/utils/server-utils";
import CategoryActions from "./components/CategoryActions";

import Image from "next/image";
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
    title: "Categories :: The Tech Makers",
    description: "Manage the available blog categories from the admin area.",
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

interface Category {
    _id: string;
    title: string;
    slug: string;
    metaTitle: string;
    metaKeyword: string;
    image: string;
}

const Page = async () => {
    const token = await getServerToken();

    if (!token) {
        redirect("/admin");
    }

    try {
        const response = await fetch(`${apiBaseUrl}/category?page=1&limit=10`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch category data");
        }

        const data = await response.json();
        const categories: Category[] = data.categories || [];
        const totalCategories = data.totalCategory || 0;
        const totalPages = Math.ceil(totalCategories / 10);

        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography variant="h6" fontWeight="bold">
                            Categories
                        </Typography>
                        <Button
                            component={Link}
                            href="/admin/category/add"
                            variant="contained"
                            color="primary"
                        >
                            New Category
                        </Button>
                    </Box>

                    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Slug</TableCell>
                                    <TableCell>Meta Title</TableCell>
                                    <TableCell>Meta Keyword</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {categories.map((category) => (
                                    <TableRow key={category._id}>
                                        <TableCell>
                                            <div className="relative w-[70px] h-[50px]">
                                                <Image
                                                    src={category.image || "/placeholder.png"}
                                                    alt={category.title}
                                                    fill
                                                    className="object-cover rounded"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell>{category.title}</TableCell>
                                        <TableCell>{category.slug}</TableCell>
                                        <TableCell>{category.metaTitle}</TableCell>
                                        <TableCell>{category.metaKeyword}</TableCell>
                                        <TableCell align="right">
                                            <CategoryActions slug={category.slug} />
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
        console.error("Error fetching category data:", error);
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
