import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getServerToken } from "../components/utils/server-utils";
import { redirect } from "next/navigation";
import BlogActions from "./components/BlogActions";
import BlogPagination from "./components/BlogPagination";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

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
} from "@mui/material";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

interface Blog {
    _id: string;
    title: string;
    slug: string;
    metaTitle: string;
    metaKeyword: string;
    image: string;
}

export const metadata: Metadata = {
    title: "Blogs :: The Tech Makers",
    description: "Browse and manage the blog posts published on the site.",
};

const PAGE_LIMIT = 10;
const PAGE_PARAM = "page";

type SearchParamsRecord = Record<string, string | string[] | undefined>;

type AdminBlogPageParams = {
    searchParams?: Promise<SearchParamsRecord>;
};

const parsePageNumber = (value?: string | string[]): number => {
    if (Array.isArray(value)) {
        value = value[value.length - 1];
    }

    const parsed = parseInt(value ?? "", 10);
    return Number.isNaN(parsed) || parsed < 1 ? 1 : parsed;
};

const stripPageParam = (searchParams?: SearchParamsRecord) => {
    const params = new URLSearchParams();

    if (!searchParams) {
        return params;
    }

    for (const [key, rawValue] of Object.entries(searchParams)) {
        if (key === PAGE_PARAM || !rawValue) {
            continue;
        }

        if (Array.isArray(rawValue)) {
            rawValue.forEach((item) => params.append(key, item));
        } else {
            params.append(key, rawValue);
        }
    }

    return params;
};

const Page = async ({ searchParams }: AdminBlogPageParams) => {
    const token = (await headers()).get("x-auth-token");
    if (!token) {
        redirect("/admin"); // protect route
    }

    const resolvedSearchParams = (await searchParams) as SearchParamsRecord | undefined;
    const requestedPage = parsePageNumber(resolvedSearchParams?.[PAGE_PARAM]);
    const baseParamsString = stripPageParam(resolvedSearchParams).toString();

    try {
        const response = await fetch(
            `${apiBaseUrl}/blogs?page=${requestedPage}&limit=${PAGE_LIMIT}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token,
                },
                cache: "no-store", // Ensure fresh data on every request
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch blog data");
        }

        const data = await response.json();
        const blogs: Blog[] = data.blogs || [];
        const totalBlogs = data.totalBlogs || 0;
        const totalPages = Math.max(Math.ceil(totalBlogs / PAGE_LIMIT), 1);
        const currentPageFromApi = data.currentPage || requestedPage;
        const currentPage = Math.min(Math.max(currentPageFromApi, 1), totalPages);

        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography variant="h6" fontWeight="bold">
                            Blogs
                        </Typography>
                        <Box display="flex" gap={1}>
                            <Button
                                component={Link}
                                href="/api/blogs/export"
                                variant="outlined"
                                color="primary"
                            >
                                Export Inventory CSV
                            </Button>
                            <Button
                                component={Link}
                                href="/admin/blog/add"
                                variant="contained"
                                color="primary"
                            >
                                New Blog
                            </Button>
                        </Box>
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
                                {blogs.map((item) => (
                                    <TableRow key={item._id}>
                                        <TableCell>
                                            <div className="relative w-[70px] h-[50px]">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover rounded"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.slug}</TableCell>
                                        <TableCell>{item.metaTitle}</TableCell>
                                        <TableCell>{item.metaKeyword}</TableCell>
                                        <TableCell align="right">
                                            <BlogActions slug={item.slug} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <BlogPagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        baseParams={baseParamsString}
                        basePath="/admin/blog"
                    />
                </Paper>
            </Container>
        );
    } catch (error) {
        console.error("Error fetching blog data:", error);
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
