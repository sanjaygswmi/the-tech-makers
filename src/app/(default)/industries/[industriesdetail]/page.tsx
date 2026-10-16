import IndustryDetail from '@/src/components/IndustriDetail/IndustryDetail'
import React from 'react'
import type { Metadata } from 'next'
import { industries_data } from '@/src/components/IndustriDetail/industries_data'
import { notFound } from 'next/navigation'

type PageProps = { params: Promise<{ industriesdetail: string }> };

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { industriesdetail } = await params;
    const item = industries_data.find((industry) => industry.slug === industriesdetail);
    if (!item) notFound();
    return {
        title: item.metaTitle ?? `${item.heading.trim()} | The Tech Makers`,
        description: item.metaDescription ?? item.introduction.trim().slice(0, 155),
        alternates: { canonical: `/industries/${industriesdetail}` },
        robots: { index: true, follow: true },
    };
};

const Industriesdetail = async ({ params }: PageProps) => {
    const { industriesdetail } = await params;
    const item = industries_data.find((industry) => industry.slug === industriesdetail);
    if (!item) notFound();
    const canonicalUrl = `https://www.thetechmakers.com/industries/${industriesdetail}`;
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thetechmakers.com/" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.thetechmakers.com/industries" },
            { "@type": "ListItem", position: 3, name: item.heading.trim(), item: canonicalUrl },
        ],
    };
    return (
        <div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData).replace(/</g, "\\u003c") }} />
            <IndustryDetail />
        </div>
    )
}
export default Industriesdetail
