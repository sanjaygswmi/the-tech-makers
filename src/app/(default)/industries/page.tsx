import React from 'react'
import type { Metadata } from 'next';

import Header from '@/src/components/Header/Header';
import Industries from '@/src/components/Industries Page/Industries';
export const metadata: Metadata = {
    title: "Industry-Specific Software Solutions | The Tech Makers",
    description: "Explore software and technology solutions for healthcare, education, cloud, real estate, manufacturing, media, and other industries.",
    alternates: { canonical: "/industries" },
};
const pages = () => {
    return (
        <div className='industries-page'>
            <Header />
            <Industries />
        </div>
    )
}

export default pages
