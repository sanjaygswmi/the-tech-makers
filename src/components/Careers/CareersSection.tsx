import Header from '@/src/components/Header/Header'
import React from 'react'
import { Metadata } from 'next';
import Banner from './Sections/Banner/Banner';
import OurMission from './Sections/OurMission/OurMission';
import Opening from './Sections/Openings/Openings';



const CareersSection = () => {
    return (
        <div className='career-page '>
             <Banner/>
             <OurMission/>
             <Opening/>
        </div>
    )
}
export default CareersSection
