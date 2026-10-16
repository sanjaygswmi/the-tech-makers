import dynamic from 'next/dynamic'
import React from 'react'
const Banner = dynamic(() => import('./Sections/Banner/Banner'))
const WhatWeDo = dynamic(() => import('./Sections/WhatWeDo/WhatWeDo'))
const EndToEnd = dynamic(() => import('./Sections/EndToEnd/EndToEnd'))
const Services = dynamic(() => import('./Sections/Services/Services'))
const IndustryCulture = dynamic(() => import('./Sections/Industry Culture/IndustryCulture'))
const Blogs = dynamic(() => import('./Sections/Blogs/Blogs'))
const Innovative = dynamic(() => import('./Sections/Innovative Brand/Innovative'))
const WeShare = dynamic(() => import('./Sections/WeShare/WeShare'))
const Reviews = dynamic(() => import('./Sections/Reviews/Reviews'))

const Home = () => {
    return (
        <div >
            <Banner />
            <WhatWeDo />
            <EndToEnd />
            <Services />
            <IndustryCulture />
            <WeShare />
            <Reviews />
            <Blogs />
            <Innovative />
        </div>
    )
}
export default Home
