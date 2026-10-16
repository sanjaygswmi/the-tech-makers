import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='banner bg-gradient-to-br from-pink-300 via-white to-transparent'>
      <div className='max-w-screen-xl md:flex justify-between mt-28 m-auto'>
        <div className='heading text-center md:text-left my-auto font-bold'>
          <div>Experts in every </div>
          <div>aspect of the </div>
          <div>product lifecycle</div>
        </div>
        <div className='img-container'>
          <Image width={500} height={500} src="/industries-banner.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
