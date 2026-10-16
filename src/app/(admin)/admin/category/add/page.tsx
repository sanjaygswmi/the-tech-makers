import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getServerToken } from "../../components/utils/server-utils";
import CategoryForm from "../components/CategoryForm";

import { Box, Card, CardContent, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "Add Category :: The Tech Makers",
    description: "",
};

const Page = async () => {
    const token = await getServerToken();

    if (!token) {
        redirect("/admin");
    }

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }} className="mt-8">
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Box sx={{ p: 3 }}>
                    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Add New Category
                            </Typography>

                            <CategoryForm />
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default Page;
