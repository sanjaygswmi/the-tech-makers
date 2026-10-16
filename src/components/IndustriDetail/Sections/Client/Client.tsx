"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from "aos"
import 'aos/dist/aos.css';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
const Client = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    const logoStyle = { width: '200px', height: 'auto' } as const;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    

    return (
        <div className='px-10 mx-auto py-10  border-b relative border-gainsboro '>
            <div    className='border  border-dashed rounded-md bg-white border-black px-2 py-1 w-44 clientsweserved text-center'>Clients We Served *</div>
            <Slider {...settings}>
                <div>
                    <Image width={200} height={200} className='mx-auto w-[200px] h-[200px] object-contain' src="/IndustryDetailPage/advance.png" alt="" />
                </div>
                <div>
                    <Image width={200} height={200} className='mx-auto w-[200px] h-[200px] object-contain' src="/IndustryDetailPage/chuster.png" alt="" />
                </div>
                <div>
                    <Image width={200} height={200} className='mx-auto w-[200px] h-[200px] object-contain' src="/IndustryDetailPage/coursedhundo.png" alt="" />
                </div>
                <div>
                    <Image width={200} height={200} className='mx-auto w-[200px] h-[200px] object-contain' src="/IndustryDetailPage/ghardhudho.png" alt="" />
                </div>
                <div>
                    <Image width={200} height={200} className='mx-auto w-[200px] h-[200px] object-contain' src="/IndustryDetailPage/jpdm.png" alt="" />
                </div>
                <div>
                    <Image width={200} height={200} className='mx-auto w-[200px] h-[200px] object-contain' src="/IndustryDetailPage/intargos.png" alt="" />
                </div>
            </Slider>
        </div>

    );
};

export default Client;
