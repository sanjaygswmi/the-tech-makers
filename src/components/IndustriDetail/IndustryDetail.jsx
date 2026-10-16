"use client"

import React from 'react'
import Header from '../Header/Header'
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../Footer2/Footer'));
const Banner = dynamic(() => import('./Banner/Banner'));
const IndustryGuidance = dynamic(() => import('./IndustryGuidance'));
const Services = dynamic(() => import('./Sections/Services/Services'));
// Retained for future reuse. Re-enable only when the content is approved and relevant to the industry.
// const Client = dynamic(() => import('./Sections/Client/Client'));
// const WeShare = dynamic(() => import('./Sections/WeShare/WeShare'));
// const Reviews = dynamic(() => import('./Sections/Reviews/Reviews'));
const WhyChoose = dynamic(() => import('./Sections/WhyShouldChoose/WhyChoose'));


import { industries_data } from './industries_data'
import { usePathname } from "next/navigation";
// Usage of the dynamically imported components
// e.g., <Footer />

const IndustryDetail = () => {

    const pathname = usePathname();

    const parts = pathname.split("/");
    const slug = parts[parts.length - 1];
  
    const matchedItem = industries_data.find((item) => item.slug === slug);
    const heading = matchedItem?.heading
    const introduction = matchedItem?.introduction
    const services = matchedItem?.services


    return (
        <div className='industries-detail'>
            <Header  />
            <Banner heading ={heading} introduction={introduction} />
            <Services services={services} />
            <IndustryGuidance slug={slug} />
            {/* Reserved for future industry-specific proof and editorial content. These shared sections are intentionally commented out, not deleted.
            <Client />
            <WeShare />
            <Reviews />
            */}
            <WhyChoose />
            <Footer />
        </div>
    )
}

export default IndustryDetail
