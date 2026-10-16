import React from 'react'
import Banner from './Sections/Banner/Banner'
import dynamic from 'next/dynamic';

const ReasonToWork = dynamic(() => import('./Sections/ReasonToWork.tsx/ReasonToWork'));
const IncreaseYourLeads = dynamic(() => import('./Sections/IncreaseYourLead/IncreasseYourLeads'));
const ReadyToEnhance = dynamic(() => import('./Sections/ReadyToEnhance/ReadyToEnhance'));
const Clients = dynamic(() => import('./Sections/Clients/Clients'));
const WeShare = dynamic(() => import('../Home Page/Sections/WeShare/WeShare'));
const Reviews = dynamic(() => import('../Home Page/Sections/Reviews/Reviews'));

// Usage of the dynamically imported components
// e.g., <ReasonToWork />

const About = () => {
    return (
        <div className='mx-auto'>
            <Banner />
            <ReasonToWork />
            <IncreaseYourLeads />
            <ReadyToEnhance />
            <WeShare />
            <Reviews />
        </div>
    )
}

export default About
