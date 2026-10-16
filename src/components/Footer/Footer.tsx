"use client"
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ContactForm from '@/src/components/ContactForm';



const Footer = () => {

  return (
    <footer

      className=" footer footer1home pt-[30px] md:pt-[70px]">

      <div className="footer-row max-w-screen-xl justify-between mx-auto flex flex-col md:flex-row">

        <div className="w-full form-area md:w-2/3 md:pr-8 form p-3 md:p-10">
          <h2 className="text-3xl font-semibold mb-4">Got a project in Mind?</h2>
          <p className='pb-20'>We&apos;re thrilled to hear about your project ideas! Please take a moment to share your thoughts with us. Whether it&apos;s a website, web application, or any digital project, we&apos;re here to turn your vision into reality.</p>

          <ContactForm />

        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0 column2 relative bg-[#1F252B]">
          <div className='relative z-10'>
            <ul className='pb-[30px]'>
              <li>
                <div className="text-white flex space-x-5">
                  <Image width={500} height={500} src="/address.png" alt="" className='w-8 h-8 ' />
                  <p>C-276, Block C, Sector 63, Noida, Uttar Pradesh, India 201301</p>
                </div>
              </li>
              <li className='mt-5'>
                <Link href="tel:+918860328059" className="text-red-500 flex space-x-5 hover:underline">
                  <Image width={500}
                    height={500} src="/phone.png" alt="" className='w-8 h-8 ' />
                  <p>+918860328059</p>

                </Link>
              </li>
              <li className='mt-5'>
                <Link href="mailto:info@thetechmakers.com" className="text-white flex space-x-5 hover:underline">
                  <Image width={500} height={500} src="/email.png" alt="" className='w-8 h-8 ' />
                  <p>  info@thetechmakers.com</p>

                </Link>
              </li>
            </ul>
            <h4 className='mt-5 text-white text-[30px] md:text-[35px] text-center md:text-left font-normal'>Our Services</h4>
            <ul className='text-center md:text-left'>
              <li className='text-white' >
                <Link href="/services/web-development" className=" mt-3 block hover:underline font-light">
                  Website Development
                </Link>
                <Link className='block mt-3 hover:underline font-light' href="/services/product-development">Product Development
                </Link>
                <Link className='block mt-3 hover:underline font-light' href="/services/app-development">
                  App Development
                </Link>
                <Link className='block mt-3 hover:underline font-light' href="/services/digital-marketing-seo">
                  Digital Marketing & Seo
                </Link>
                <Link className='block mt-3 hover:underline font-light' href="/services/email-marketing">
                  Email Marketing
                </Link>
                <Link className='block mt-3 hover:underline font-light' href="/services/web-development">
                  Responsive Web Design
                </Link>
              </li>
            </ul>

            <div className='flex space-x-3 mt-10 mb-[60px] md:mb-0 justify-center md:justify-start'>
              <Link href="https://www.facebook.com/thetechmaker/" target='_blank'>
                <Image width={30} height={30} src="/facebook.png" alt="Facebook" />
              </Link>
              <Link className='bg-white rounded-full p-3 instagram_logo' href="https://instagram.com/thetechmaker?igshid=MzRlODBiNWFlZA==">
                <Image width={20} height={20} className='my-auto ' src="/instagram.png" alt="Instagram" />
              </Link>
              <Link href="https://in.linkedin.com/company/the-tech-makers-pvt-ltd" target='_blank'>
                <Image width={30} height={30} src="/LinkedIn.png" alt="LinkedIn" />
              </Link>
            </div>

          </div>
          <div className='flex justify-center mt-[-30px] md:mt-0 md:absolute md:bottom-[30px] md:right-[20px] ft-bt-logo'>
            <Image
              width={40}
              height={20}
              src="/logo.png"
              alt=""
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div >
      <div className='p-[15px] md:p-8 copyright text-white text-center text-[12px] md:text-[16px]'>Copyright © The Tech Makers. All Rights Reserved</div>
    </footer >
  );
};

export default Footer;
