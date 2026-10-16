import React from 'react'
import{ BiSearch }from 'react-icons/bi'
const Banner = () => {
    return (
        <div className=' pt-16  bg-gradient-radial from-[#f5dfef] via-white to-white'>
            <div className='blog-banner-section mx-3 mt-20 pb-16'>
                <div className='max-w-screen-xl mx-auto text-center '>

                    <h1 className='heading font-bold'>Our Blog & Resources</h1>
                    <div className='description'>
                        <p>Be abreast with the industry insights, news, technologies and trends. Make a </p>
                        <p>difference to your business leveraging on the knowledge shared by experts.</p>
                    </div>
                    <div className="flex justify-center items-center mt-16">
                        <div className="w-64 md:w-96 relative">
                            <input
                                type="text"
                                placeholder="Do a quick search"
                                className="w-full bg-white border border-gray-300 px-10 py-2 rounded-full focus:outline-none"

                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <BiSearch/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
