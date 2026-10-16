import Header from '@/src/components/Header/Header'
import React from 'react'
import type { Metadata } from 'next';
import Contact from '@/src/components/ContactPage/Contact'
import Footer from '@/src/components/Footer2/Footer';

export const metadata: Metadata = {
    title: "Contact The Tech Makers | Discuss Your Project",
    description: "Contact The Tech Makers to discuss your website, software, mobile app, AI, or digital services project.",
    alternates: { canonical: "/contact" },
};


const page = () => {
    return (
        <div className='contact-page'>
            <Header />
            <Contact />
            <Footer />
        </div>
    )
}

export default page
