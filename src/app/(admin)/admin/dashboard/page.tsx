import type { Metadata } from "next";
import { redirect } from 'next/navigation';
import { getServerToken } from '../components/utils/server-utils';
import { Card, CardContent, Typography, Box, Grid2 } from '@mui/material';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchDashboardData = async () => {
    try {
        const response = await fetch(`${baseUrl}/blogs?page=1&limit=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store', // Ensure fresh data is fetched on every request
        });

        if (!response.ok) {
            throw new Error('Failed to fetch dashboard data');
        }

        const data = await response.json();
        return {
            totalBlogs: data.totalBlogs || 0,
        };
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return {
            totalBlogs: 0,
        };
    }
};

export const metadata: Metadata = {
    title: "Dashboard :: The Tech Makers",
    description: "Admin dashboard overview",
};

export default async function Home() {
    const token = await getServerToken();
    if (!token) {
        // If no token, redirect to login 
        redirect("/admin");
    }

    const dashboardData = await fetchDashboardData();

    return (
        <>
            <Box p={3} className="mt-8">
                <Box display="flex" flexWrap="wrap" gap={3}>
                    {/* Blogs Card */}
                    <Box flex={1} minWidth={300}>
                        <Card>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box>
                                        <Typography variant="h6" color="textSecondary">
                                            Blogs
                                        </Typography>
                                        <Typography variant="h4">
                                            {dashboardData.totalBlogs}
                                        </Typography>
                                    </Box>
                                    <SwitchAccountIcon color="success" fontSize="large" />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Services Card */}
                    <Box flex={1} minWidth={300}>
                        <Card>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box>
                                        <Typography variant="h6" color="textSecondary">
                                            Services
                                        </Typography>
                                        <Typography variant="h4">
                                            $7,770
                                        </Typography>
                                    </Box>
                                    <ShoppingCartIcon color="primary" fontSize="large" />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Performance Card */}
                    <Box flex={1} minWidth={300}>
                        <Card>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box>
                                        <Typography variant="h6" color="textSecondary">
                                            Performance
                                        </Typography>
                                        <Typography variant="h4">
                                            256%
                                        </Typography>
                                    </Box>
                                    <TrendingUpIcon color="error" fontSize="large" />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
