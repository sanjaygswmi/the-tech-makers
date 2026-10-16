import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='banner-section servicebanner_arrow px-5  py-16 md:flex mt-20 max-w-screen-xl mx-auto justify-between'>
      <div className='text-side'>
        <div className='title border-dashed border w-40 my-6  mx-auto md:mx-0  border-black px-2 py-1 mt-10 text-center rounded'>Our Services * </div>
        <div className='heading text-[25px] md:text-[40px] font-bold'>
          <div>We dazzle</div>
          <div>your clients</div>
        </div>
        <div className='description mt-5'>
          At The tech Makers, we are in the business of creating unforgettable experiences for your clients. Our team of creative professionals is dedicated to crafting moments that leave a lasting impression. From stunning designs to seamless interactions, we go the extra mile to ensure your clients are not just satisfied but dazzled by your brand. Let&apos;s make every interaction with your business a truly remarkable one.
        </div>
        <div className=''></div>
        <div className='button-container my-10'>
          <Link
            href="/contact"
            className="relative px-5 py-3 overflow-hidden font-medium text-[#F48B3A]  border border-[#F48B3A]  shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#F48B3A] group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#F48B3A] group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F48B3A]  opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Get Started Now!
            </span>
          </Link>
        </div>
      </div>
      <div className='box-section'>
        <div className='md:flex md:space-x-5 space-y-5 md:space-y-0  service_page_banner_box  '>
          <div className="bg-[#499dff] mx-auto box relative  p-4 h-[280px]  rounded-2xl">
            <div className="text-lg text-black title">Marketing that sells</div>
            <Image
              width={500}
              height={500}
              src="/service-marketing.png"
              alt="Image 2"
              className="w-full mt-6"
              priority
            />
            <div className='absolute_image_corner'>
              <Image width={500} height={500} src="/marketingabsolute.png" alt="" />
            </div>
          </div>
          <div className="bg-[#fde284] mx-auto box p-4 h-[280px] relative rounded-2xl">
            <div className="text-lg text-black  title">Designs that tell story</div>
            <Image width={500} height={500} src="/service-design.png" alt="Image 2" className="w-full mt-6" />
            <div className='absolute_image_corner'><Image width={500} height={500} src="/designabsolute.png" alt="" /></div>
          </div>
        </div>
        <div className='md:flex justify-center mt-5 md:mr-16 gap-5 md:space-x-5  space-y-5 md:space-y-0 service_page_banner_box mt-10'>
          <div className="bg-[#ff9559] mx-auto box p-4 h-[280px] relative rounded-2xl">
            <div className="text-lg text-black title">Apps that compel</div>
            <Image width={500} height={500} src="/service-apps.png" alt="Image 2" className="w-full mt-6" />
            <div className='absolute_image_corner'><Image width={500} height={500} src="/appsabsolute.png" alt="" /></div>
          </div>
          <div className="bg-[#00ca8e] box  mx-auto p-4 h-[280px] relative  rounded-2xl">
            <div className="text-lg text-black  title">Development that propels growth</div>
            <Image width={500} height={500} src="/service-development.png" alt="Image 2" className="w-full mt-6" />
            <div className='absolute_image_corner'><Image width={500} height={500} src="/developmentabsolute.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
