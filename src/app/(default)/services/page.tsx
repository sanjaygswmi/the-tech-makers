import Header from '@/src/components/Header/Header'
import React from 'react'
import type { Metadata } from 'next';
import Services from '@/src/components/Services Page/Services';
import Footer from '@/src/components/Footer2/Footer';

export const metadata: Metadata = {
    title: 'Software Development & Technology Services | The Tech Makers',
    description: 'Explore web development, app development, product engineering, QA, marketing, AI, chatbot, and data analytics services from The Tech Makers.',
    alternates: { canonical: '/services' },
};
const page = () => {
    return (
        <div className='services-page'>
            <Header />
            <Services />
            <Footer />
        </div>
    )
}

export default page
