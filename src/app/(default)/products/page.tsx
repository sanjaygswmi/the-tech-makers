import Header from '@/src/components/Header/Header'
import React from 'react'
import type { Metadata } from 'next';
import Products from '@/src/components/Products/Products';
import Footer from '@/src/components/Footer2/Footer';
export const metadata: Metadata = {
    title: "Software Products & Business Systems | The Tech Makers",
    description: "Explore business software products from The Tech Makers, including school and college ERP and other management systems.",
    alternates: { canonical: "/products" },
};

const page = () => {
    return (
        <div className='products-page'>
            <Header />
            <Products />
            <Footer />
        </div>
    )
}
export default page
