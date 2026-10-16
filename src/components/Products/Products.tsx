import React from 'react';
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./Sections/Banner/Banner'));
const TtmBusiness = dynamic(() => import('./Sections/TTMBusiness/TtmBusiness'));
const Seamless = dynamic(() => import('./Sections/Seamless/Seamless'));
const IndustryCulture = dynamic(() => import('../Home Page/Sections/Industry Culture/IndustryCulture'));
const Reviews = dynamic(() => import('../Home Page/Sections/Reviews/Reviews'));

// Usage of the dynamically imported components
// e.g., <Banner />


const Products = () => {
    return (
        <div className=''>
            <Banner />
            <TtmBusiness />
            <Seamless />
            <IndustryCulture />
            <Reviews />
        </div>
    )
}

export default Products
