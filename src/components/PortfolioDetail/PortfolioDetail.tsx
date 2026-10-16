import React from "react";
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./Sections/Banner/Banner'));
const About = dynamic(() => import('./Sections/About/About'));
const About2 = dynamic(() => import('./Sections/About/About2'));
const LastSection = dynamic(() => import('./Sections/LastSection/LastSetion'));
const Header = dynamic(() => import('../Header/Header'));
const TwoBoxes = dynamic(() => import('./Sections/Twoboxes/TwoBoxes'));

// Usage of the dynamically imported components
// e.g., <Banner />

 
const PolrtfolioDetail = () =>{
    return (
        <div className="mt-16 portfolio-detail">
            <Header/>
            <Banner/>
            <About/>
            <About2 />
            <TwoBoxes/>
            <LastSection/>
        </div>
    )
}

export default PolrtfolioDetail