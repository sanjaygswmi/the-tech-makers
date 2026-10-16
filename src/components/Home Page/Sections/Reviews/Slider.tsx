'use client';
import React, { useState, useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import Slider from "react-slick";
import "./Slider.css";


interface ArrowProps {
  onClick: () => void;
}

type ReviewSlide = {
  id: number;
  src: string;
  alt: string;
  Name: string;
  profile: string;
  role: string;
  desc: string;
};
// const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
//   return (
//     <div className="nextArrow" onClick={onClick}>
//       <BsChevronRight />
//     </div>
//   );
// };

// const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
//   return (
//     <div className="prevArrow" onClick={onClick}>
//       <BsChevronLeft />
//     </div>
//   );
// };

export const images: ReviewSlide[] = [
  {
    id: 1,
    src: "/video.png",
    alt: "Placeholder image",
    Name: "Raman Chaudhary",
    profile: "/profile.png",
    role: "Founder",
    desc: "Outstanding web development service! TTM brought our website vision to life with a stunning, user-friendly design. Their attention to detail and responsive team made the process smooth and efficient.a",
  },
  {
    id: 2,
    src: "/video.png",
    alt: "Placeholder image",
    Name: "Sanjeev kumar",
    profile: "/profile.png",
    role: "Manager",
    desc: "The Tech Makers has worked wonders for our online visibility. Their SEO strategies have significantly boosted our search rankings, resulting in a steady flow of organic traffic. An excellent choice for digital marketing!",
  },
  {
    id: 3,
    src: "/video.png",
    alt: "Placeholder image",
    Name: "Chatur Mehra",
    profile: "/profile.png",
    role: "Client",
    desc: "Thanks to The Tech Makers's lead generation expertise, our business has witnessed a substantial increase in qualified leads. Their targeted approach and data-driven methods have been instrumental in our growth.",

  },
  {
    id: 4,
    src: "/video.png",
    alt: "Placeholder image",
    Name: "Aman Mishra",
    profile: "/profile.png",
    role: "Client",
    desc: "The graphic design work by The Tech Makers is nothing short of exceptional. They've created stunning visuals for our brand, helping us stand out in a competitive market. We're thrilled with the results!",

  },
  {
    id: 5,
    src: "/video.png",
    alt: "Placeholder image",
    Name: "Shivam thapa",
    profile: "/profile.png",
    role: "Client", 
    desc: "The Tech Makers has delivered a mobile app that's exceeded our expectations. It's user-friendly, visually appealing, and functions flawlessly. Their development team's expertise is evident in the final product.",
  },
  {
    id: 6,
    src: "/video.png",
    alt: "Placeholder image",
    Name: "Atul Gupta",
    profile: "/profile.png",
    role: "Client",
    desc: "Our experience with The Tech Makers's CRM product has been outstanding. It's streamlined our operations, improved customer relations, and provided valuable insights for decision-making. A game-changer for our business!",

  },
];

const ImageSlider = ({ slidesToShow = 1 }) => {

  const sliderRef = useRef<Slider | null>(null)
  const [imageIndex, setImageIndex] = useState(0);


  
  useEffect(() => {
    const nextBtn = document.querySelector('.reviews-section .custom-next')
    const prevBtn = document.querySelector('.reviews-section .custom-prev')

    const goNext = () => sliderRef.current?.slickNext?.()
    const goPrev = () => sliderRef.current?.slickPrev?.()

    nextBtn?.addEventListener('click', goNext)
    prevBtn?.addEventListener('click', goPrev)

    return () => {
      nextBtn?.removeEventListener('click', goNext)
      prevBtn?.removeEventListener('click', goPrev)
    }
  }, [])

  // 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: slidesToShow,
    centerPadding: "25%",
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    cssEase: 'ease',
    beforeChange: (_current: number, next: number) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
          slidesToScroll: 1,
        },
      },
    ],
  };
  // 5.
  const templateImages = images.map((image) => (
    <div key={image.id}>
      <div className="slideWrapper mt-5">
        <div className="md:flex space-x-5">
          <div className="image-container">
            <Image width={500} height={500} className="mx-auto" src={image.src} alt={image.alt} />
          </div>
          <div className="text-area">
            <Image width={500} height={500} className="w-20 mb-2 mt-2" src="/review.png" alt="Quote" />
            <p>{image.desc}</p>
            <div className="flex mt-1">
              <div className="profile-pic ">
                <Image width={500} height={500} className="w-8" src={image.profile} alt={image.Name} />
              </div>
              <div className="name-role my-auto ml-2">
                <h3>{image.Name}</h3>
                <h4 className="text-xs">{image.role}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <Slider {...settings} ref={sliderRef} className="custom-review">{templateImages}</Slider>;
};

export default ImageSlider;



