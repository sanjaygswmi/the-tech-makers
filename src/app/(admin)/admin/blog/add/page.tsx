import { redirect } from 'next/navigation';
import { getServerToken } from '../../components/utils/server-utils';
import type { Metadata } from 'next';
import BlogForm from '../components/BlogForm';
import { servicedata } from '@/src/components/Services Page/servicedata';

// ✅ Import SSR-safe MUI components
import { Box, Card, CardContent, Typography } from '@mui/material';

export const metadata: Metadata = {
    title: 'Add Blog :: The Tech Makers',
    description: '',
};

interface Tag {
    _id: string;
    name: string;
}

interface Category {
    _id: string;
    title: string;
}

const Page = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = await getServerToken();

    if (!token) {
        redirect('/admin');
    }

    try {
        // ✅ Fetch category and tag data (SSR)
        const [categoryRes, tagRes] = await Promise.all([
            fetch(`${baseUrl}/category`, { headers: { 'x-auth-token': token }, cache: 'no-store' }),
            fetch(`${baseUrl}/tags`, { headers: { 'x-auth-token': token }, cache: 'no-store' }),
        ]);

        if (!categoryRes.ok || !tagRes.ok) {
            console.error('Failed to fetch categories or tags:', {
                category: await categoryRes.text(),
                tag: await tagRes.text(),
            });
            throw new Error('Failed to fetch category or tag data');
        }

        const [categoryData, tagData] = await Promise.all([
            categoryRes.json(),
            tagRes.json(),
        ]);

        return (
            <Box sx={{ display: 'flex', minHeight: '100vh' }} className="mt-8">

                {/* Main Content */}
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 3 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Add New Blog
                                </Typography>

                                {/* ✅ BlogForm inside Card */}
                                <BlogForm
                                    categoryData={categoryData.categories || []}
                                    tagData={tagData.tags || []}
                                    serviceData={servicedata.map(({ slug, title }) => ({ slug, title }))}
                                />
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        );
    } catch (error) {
        console.error('Error fetching data for SSR:', error);
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
