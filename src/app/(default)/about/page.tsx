import Header from '@/src/components/Header/Header'
import React from 'react'
import type { Metadata } from 'next';
import Footer from '@/src/components/Footer2/Footer';
import About from '@/src/components/About/About';
import Head from 'next/head';
export const metadata: Metadata = {
    title: "About The Tech Makers | Technology & Software Partner",
    description: "Learn about The Tech Makers, a technology company delivering web, software, mobile app, and digital solutions.",
    alternates: { canonical: "/about" },
};

const Page = () => {
    return (
        <div className='about-page'>
            <Head>
 
            </Head>
            <Header />
            <About />
            <Footer />
        </div>
    );
}

export default Page;

