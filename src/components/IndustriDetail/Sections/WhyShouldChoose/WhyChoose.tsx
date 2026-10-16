"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderArrowProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  currentSlide?: number;
  slideCount?: number;
};

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const WhyChoose = () => {
    const slides = [
        {
            image: "/IndustryDetailPage/whychoose1.png",
            title: "01",
            subtitle: "Clear project scope",
            description: "We start by understanding your users, existing systems, constraints, and business goals, then scope a practical delivery approach.",
          },
      
          {
            image: "/IndustryDetailPage/whychoose2.png",
            title: "02",
            subtitle: "Solutions shaped around your needs",
            description: "We start by understanding your users, existing systems, constraints, and business goals, then scope a practical delivery approach.",
          },
      
          {
            image: "/IndustryDetailPage/whychoose3.png",
            title: "03",
            subtitle: "Considered security and privacy",
            description: "We start by understanding your users, existing systems, constraints, and business goals, then scope a practical delivery approach.",
          },
      
          {
            image: "/IndustryDetailPage/whychoose1.png",
            title: "04",
            subtitle: "Collaborative delivery",
            description: "We start by understanding your users, existing systems, constraints, and business goals, then scope a practical delivery approach.",
          },
      ];

      const CustomNextButton = ({
        currentSlide,
        slideCount,
        className,
        style,
        onClick,
        ...rest
      }: SliderArrowProps) => (
        <button
          type="button"
          {...rest}
          className={`custom-next-button slick-next banner_slick_next ${className ?? ''}`}
          style={style}
          onClick={onClick}
        >
          <Image
            src="/nextslide.png"
            alt="Next"
            width={50}
            height={50}
            style={{ width: 50, height: 50 }}
          />
        </button>
      );
      
      const CustomPrevButton = ({
        currentSlide,
        slideCount,
        className,
        style,
        onClick,
        ...rest
      }: SliderArrowProps) => (
        <button
          type="button"
          {...rest}
          className={`custom-prev-button slick-prev banner_slick_prev ${className ?? ''}`}
          style={style}
          onClick={onClick}
        >
          <Image
            src="/prevslide.png"
            alt="Previous"
            width={50}
            height={50}
            style={{ width: 50, height: 50 }}
          />
        </button>
      );
      
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextButton />,
    prevArrow: <CustomPrevButton />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-[#F6F6F6] py-10 whywechoose_slider'>
      <div className='max-w-screen-xl mx-auto'>
        <h2 className='md:text-[40px] text-[25px] text-center font-bold'>
          Why Should You Choose <br />{' '}
          <span className='text-[#1B76FF]'>The</span>{' '}
          <span className='text-[#163FA1]'>Tech</span>{' '}
          <span className='text-[#EC4918]'>Makers?</span>
        </h2>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className={`w-[280px] slide-item`}>
              <div className='image_box'>
                <Image
                  width={200}
                  height={200}
                  className='mx-auto w-[25px] h-auto'
                  src={slide.image}
                  alt=''
                />
              </div>
              <h2 className='font-bold text-center mt-3'>{slide.title}</h2>
              <h3 className='font-bold text-center  mt-3'>{slide.subtitle}</h3>
              <p className='text-center  mt-3'>{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhyChoose;
