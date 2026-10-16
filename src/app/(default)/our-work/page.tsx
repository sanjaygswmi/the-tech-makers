import Header from '@/src/components/Header/Header'
import React from 'react'
import type { Metadata } from 'next';
import Portfolio from '@/src/components/Portfolio/Portfolio';
export const metadata: Metadata = {
    title: 'The Tech Makers : Our Work',
};


const page = () => {
    return (
        <div className='our-work'>
            <Header />
            <Portfolio />
        </div>
    )
}
export default page
