import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerToken } from "../../../components/utils/server-utils";
import CategoryForm from "../../components/CategoryForm";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "Edit Category :: The Tech Makers",
    description: "Adjust category details before publishing.",
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const token = await getServerToken();

    if (!token) {
        redirect("/admin");
    }

    try {
        const { slug } = await params;

        const categoryRes = await fetch(`${apiBaseUrl}/category/${slug}`, {
            headers: { "x-auth-token": token },
            cache: "no-store",
        });

        if (!categoryRes.ok) {
            console.error("Failed to fetch category:", await categoryRes.text());
            throw new Error("Failed to fetch category data");
        }

        const categoryData = await categoryRes.json();

        return (
            <Box sx={{ display: "flex", minHeight: "100vh" }} className="mt-8">
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ p: 3 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Edit Category
                                </Typography>

                                <CategoryForm
                                    initialData={{
                                        title: categoryData.data.title,
                                        slug: categoryData.data.slug,
                                        description: categoryData.data.description,
                                        metaTitle: categoryData.data.metaTitle,
                                        metaKeyword: categoryData.data.metaKeyword,
                                        metaDescription: categoryData.data.metaDescription,
                                        image: categoryData.data.image,
                                        headerScripts: categoryData.data.headerScripts,
                                        bodyScripts: categoryData.data.bodyScripts,
                                        status: categoryData.data.status,
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
