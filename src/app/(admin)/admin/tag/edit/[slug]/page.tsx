import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerToken } from "../../../components/utils/server-utils";
import TagForm from "../../components/TagForm";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "Edit Tag :: The Tech Makers",
    description: "Review and update the tag metadata.",
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const token = await getServerToken();

    if (!token) {
        redirect("/admin");
    }

    try {
        const { slug } = await params;

        const tagRes = await fetch(`${apiBaseUrl}/tags/${slug}`, {
            headers: { "x-auth-token": token },
            cache: "no-store",
        });

        if (!tagRes.ok) {
            console.error("Failed to fetch tag:", await tagRes.text());
            throw new Error("Failed to fetch tag data");
        }

        const tagData = await tagRes.json();

        return (
            <Box sx={{ display: "flex", minHeight: "100vh" }} className="mt-8">
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ p: 3 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Edit Tag
                                </Typography>

                                <TagForm
                                    initialData={{
                                        title: tagData.data.title,
                                        slug: tagData.data.slug,
                                        description: tagData.data.description,
                                        metaTitle: tagData.data.metaTitle,
                                        metaKeyword: tagData.data.metaKeyword,
                                        metaDescription: tagData.data.metaDescription,
                                        headerScripts: tagData.data.headerScripts,
                                        bodyScripts: tagData.data.bodyScripts,
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
