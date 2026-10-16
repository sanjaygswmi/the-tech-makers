import React from 'react'
import type { Metadata } from 'next';
import Header from '@/src/components/Header/Header';
import Blogs from '@/src/components/Blogs/Blogs';
import Footer from '@/src/components/Footer2/Footer';
import { servicedata } from '@/src/components/Services Page/servicedata';
export const metadata: Metadata = {
    title: "Technology Insights & Business Blogs | The Tech Makers",
    description: "Read insights on software development, web technology, digital growth, e-commerce, and business technology from The Tech Makers.",
    alternates: { canonical: "/blogs" },
};

export const dynamic = "force-dynamic";

type BlogPageProps = { searchParams: Promise<{ service?: string; page?: string }> };

const page = async ({ searchParams }: BlogPageProps) => {
    const { service, page: pageParam } = await searchParams;
    const serviceSlug = service?.trim().toLowerCase();
    const selectedService = serviceSlug ? servicedata.find((item) => item.slug === serviceSlug) : undefined;
    const requestedPage = Number(pageParam ?? 1);
    const currentPage = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
    return (
        <div className="blogs-page ">
            <Header />
            <Blogs serviceSlug={selectedService?.slug} serviceTitle={selectedService?.title} page={currentPage} />
            <Footer />
        </div>
    )
}

export default page
