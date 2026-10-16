import React  from 'react'
import Banner from './Sections/Banner/Banner'
import Bloglist from './Sections/Bloglist/Bloglist'

const Blogs = ({ serviceSlug, serviceTitle, page = 1 }: { serviceSlug?: string; serviceTitle?: string; page?: number }) => {

    return (
        <div className='blogs-component-parent pb-16'>
            <Banner />
            <Bloglist serviceSlug={serviceSlug} serviceTitle={serviceTitle} page={page} />
        </div>
    )
}

export default Blogs
