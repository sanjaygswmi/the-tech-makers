"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "@fontsource/manrope/800.css";
import Link from "next/link"; 
const Slider = dynamic(() => import("react-slick"), { ssr: false });
type SliderArrowProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  currentSlide?: number;
  slideCount?: number;
};
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
 


const CustomNextButton = (props: SliderArrowProps) => {
  const { currentSlide, slideCount, className, ...buttonProps } = props;
  return (
  <button
    type="button"
    {...buttonProps}
    className={`${className ?? ""} custom-next-button slick-next banner_slick_next`}
  >
    <Image src="/next.png" alt="Next" width={50} height={50} style={{ width: 50, height: 50 }} />
  </button>
  );
};

const CustomPrevButton = (props: SliderArrowProps) => {
  const { currentSlide, slideCount, className, ...buttonProps } = props;
  return (
  <button
    type="button"
    {...buttonProps}
    className={`${className ?? ""} custom-prev-button slick-prev banner_slick_prev`}
  >
    <Image src="/prev.png" alt="Previous" width={50} height={50} style={{ width: 50, height: 50 }} />
  </button>
  );
};


const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextButton />,
    prevArrow: <CustomPrevButton />,
  };
   
 

  return (
    <div className="homepage_banner2 ">
     <Slider {...settings}>
        <div  className="banner main_banner_homepage pt-28 bg-gradient-to-r from-pink-300 via-orange-200 to-orange-300">
          <div className="max-w-screen-xl-homepage md:px-0 md:flex justify-between md-flex innerdiv">
            <div className="text-side px-4">
              <h1 style={{ fontFamily: 'Manrope' }} className="banner-text text-[#252e79] text-[40px] md:text-[45px] bannerheading bannerheadinglineheight font-bold banner-heading mx-auto">
               Web & Software Development for Growing Businesses
              </h1>
              <div className="description mt-5">Welcome to TTM – your destination for cutting-edge technical solutions. With a legacy of excellence and a focus on innovation, we engineer pathways to success across diverse industries. Step into a world where precision meets possibility.</div>
              <div className="mt-10 mb-10">
                <Link href='/about' className="relative px-5 py-3 overflow-hidden font-medium text-[#F48B3A] border border-[#F48B3A] shadow-inner group">
                  {/* Add your Link component content here */}
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> KNOW MORE</span>
                </Link>
              </div>
            </div>
            <div className="banner-img bg-white rounded-bl-none mt-20 rounded-l-3xl">
              <Image src="/banner1.jpg" alt="Banner" width={600} height={300} />
            </div>
          </div>
        </div>
        <div className={`slide1 banner homepage_banner pt-28 bg-gradient-to-r from-pink-300 via-orange-200 to-orange-300`}>
          <div className="max-w-screen-xl mx-auto md:px-0 md:flex justify-between md-flex innerdiv">
           <div className="image_box">
              <Image src= "/bannerimage1.png" alt="Banner" width={600} height={300} />
            </div>
           <div className="text-side px-4 relative">
              <h2 style={{ fontFamily: 'Manrope' }} className="banner-text mb-10 text-[#252e79] text-[40px] md:text-[45px] bannerheading bannerheadinglineheight font-bold banner-heading mx-auto">
                 We Create Applications
              </h2>
              <div className="relative absolute_image">
              <h3 className="p-3 first_heading border border-dashed border-black list text-[19px]">To help you provide a better business experience to billions of Smartphone Users around the world </h3> 
              <Image  alt="Banner" width={50} height={50} src="/newbannerarrow.png"/>
              </div>
              <h3 className="mt-3 p-3 border border-dashed border-black text-[19px]">Let&apos;s turn your Business into an App and take it into the hands of Billions of Users</h3>
              <div className="relative my-5 curly-arrow w-[50px]">
              <Image alt="Banner" width={50} height={50} src="/curlyarrowbanner.png"/>
              </div>
            
              <div className="  mb-10">
                <Link href="/contact" className="relative px-2 text-[19px] py-1 shadow-md rounded-lg overflow-hidden font-medium text-white  bg-[#f97316] shadow-inner group">
                  Let&apos;s meet on G-meet
                </Link> <span className="text-[19px]">today and Re-define your Business for Smartphone</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`slide1 banner homepage_banner2  bg-gradient-to-r from-pink-300 via-orange-200 to-orange-300`}>
          <div className="max-w-screen-xl mx-auto pt-28 md:px-0 md:flex justify-between md-flex innerdiv">
            <div className="text-side px-4">
              <h2 style={{ fontFamily: 'Manrope' }} className="banner-text mb-10 text-[#252e79] text-[40px] md:text-[45px] bannerheading bannerheadinglineheight font-bold banner-heading mx-auto">
                 We Develop Website
              </h2>
              <div className="relative absolute_image">
              <h3 className="p-3 border border-dashed border-black text-[19px] first_heading">To help you build a more trustworthy online presense</h3>
              <Image className="first-heading-image" alt="Banner" width={50} height={50} src="/newbannerarrow.png"/>
              </div>
              <h3 className="mt-3 p-3 border border-dashed border-black text-[19px]">Let&apos;s Craft your website together-that can open the door to endless possibilities</h3>

              <div className="relative my-5 curly-arrow w-[50px]">
              <Image alt="Banner" width={50} height={50} src="/curlyarrowbanner.png"/>
              </div>
              <div className="  mb-10">
                <Link href="/contact" className="relative px-2 text-[19px] py-1 shadow-md rounded-lg overflow-hidden font-medium text-white  bg-[#f97316] shadow-inner group">
                  Book an appointment
                </Link> <span className="text-[19px]">& turn your ideas into a reality</span>
              </div>
            </div>
            <div className="image_box">
              <Image src= "/bannerimage2.png" alt="Banner" width={600} height={300} />
            </div>
          </div>
        </div>
    </Slider>
    </div>
  );
};

export default Banner;

