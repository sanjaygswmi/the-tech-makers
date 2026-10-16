import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerToken } from "../../../components/utils/server-utils";
import BlogForm from "../../components/BlogForm";
import { servicedata } from "@/src/components/Services Page/servicedata";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "Edit Blog :: The Tech Makers",
    description: "Edit and publish blog posts inside the admin panel.",
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const token = await getServerToken();

    if (!token) {
        redirect("/admin");
    }

    try {
        const { slug } = await params; // Ensure params.slug is accessed synchronously

        // Fetch blog, category, and tag data
        const [blogRes, categoryRes, tagRes] = await Promise.all([
            fetch(`${apiBaseUrl}/blogs/${slug}`, {
                headers: { "x-auth-token": token },
                cache: "no-store",
            }),
            fetch(`${apiBaseUrl}/category`, {
                headers: { "x-auth-token": token },
                cache: "no-store",
            }),
            fetch(`${apiBaseUrl}/tags`, {
                headers: { "x-auth-token": token },
                cache: "no-store",
            }),
        ]);

        if (!blogRes.ok || !categoryRes.ok || !tagRes.ok) {
            console.error("Failed to fetch data:", {
                blog: await blogRes.text(),
                category: await categoryRes.text(),
                tag: await tagRes.text(),
            });
            throw new Error("Failed to fetch data");
        }

        const [blogData, categoryData, tagData] = await Promise.all([
            blogRes.json(),
            categoryRes.json(),
            tagRes.json(),
        ]);

        const normalizedBlog =
            blogData?.data ?? blogData?.blog ?? blogData ?? null;

        if (!normalizedBlog) {
            throw new Error("Blog payload missing");
        }

        return (
            <Box sx={{ display: "flex", minHeight: "100vh" }} className="mt-8">
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ p: 3 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Edit Blog
                                </Typography>

                                <BlogForm
                                    categoryData={categoryData.categories || []}
                                    tagData={tagData.tags || []}
                                    serviceData={servicedata.map(({ slug, title }) => ({ slug, title }))}
                                    initialData={{
                                        title: normalizedBlog.title,
                                        slug: normalizedBlog.slug,
                                        short_desc: normalizedBlog.short_desc,
                                        content: normalizedBlog.content,
                                        metaTitle: normalizedBlog.metaTitle,
                                        metaKeyword: normalizedBlog.metaKeyword,
                                        metaDescription: normalizedBlog.metaDescription,
                                        headerScripts: normalizedBlog.headerScripts,
                                        bodyScripts: normalizedBlog.bodyScripts,
                                        status: normalizedBlog.status,
                                        image: normalizedBlog.image,
                                        tag: normalizedBlog.tag,
                                        category: normalizedBlog.category,
                                        serviceSlugs: normalizedBlog.serviceSlugs || [],
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        );
    } catch (error) {
        console.error("Error fetching data for SSR:", error);
        return (
            <Box sx={{ p: 5 }}>
                <Typography variant="h6" color="error">
                    Failed to load data. Please try again later.
                </Typography>
            </Box>
        );
    }
};

export default Page;
