import Header from '@/src/components/Header/Header'
import React from 'react'
import type { Metadata } from 'next';
import Footer from '@/src/components/Footer2/Footer';
import CareersSection from '@/src/components/Careers/CareersSection';
export const metadata: Metadata = {
    title: "Careers at The Tech Makers | Join Our Team",
    description: "Explore career opportunities at The Tech Makers and connect with our team about working together.",
    alternates: { canonical: "/careers" },
};


const Careers = () => {
    return (
        <div className='contact-page'>
            <Header />
            <CareersSection/>
            <Footer />
        </div>
    )
}

export default Careers
