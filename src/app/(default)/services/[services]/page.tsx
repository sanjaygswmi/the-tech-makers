import Footer from '@/src/components/Footer2/Footer';
import Header from '@/src/components/Header/Header';
import ServicesDetail from '@/src/components/ServicesDetail/ServicesDetail';
import { servicedata } from '@/src/components/Services Page/servicedata';
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type PageProps = {
    params: Promise<{
        services: string;
    }>;
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { services } = await params;
    const matchedItem = servicedata.find((item) => item.slug === services);
    if (!matchedItem) notFound();
    const title = matchedItem.title;
    const description = matchedItem.metaDescription ?? matchedItem.description?.trim().slice(0, 155) ?? 'Explore software and technology services from The Tech Makers.';

    return {
        title: `${title} Services | The Tech Makers`,
        description,
        alternates: { canonical: `/services/${services}` },
        robots: { index: true, follow: true },
    };
};

const page = async ({ params }: PageProps) => {
    const { services } = await params;
    if (!servicedata.some((item) => item.slug === services)) notFound();
    return (
        <div className='service-detail'>
            <Header />
            <ServicesDetail slug={services} />
            <Footer />
        </div>
    );
};

export default page;
