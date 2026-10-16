"use client"

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type SliderItem = {
  id: number;
  title: string;
  image: string;
};

const initialData: SliderItem[] = [
  { id: 1, title: "PROJECT 01", image: "/project/project1.png" },
  { id: 2, title: "PROJECT 02", image: "/project/project2.png" },
  { id: 3, title: "PROJECT 03", image: "/project/project3.png" },
  { id: 4, title: "PROJECT 04", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "PROJECT 05", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "PROJECT 06", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800" },
];

function CustomSlider({
  items,
  activeIndex,
  hasTransition = true,
  breakpoints = { 0: 1, 768: 2, 1024: 3 },
}: {
  items: SliderItem[];
  activeIndex: number;
  hasTransition?: boolean;
  breakpoints?: Record<number, number>;
}) {
  const [visibleSmallItems, setVisibleSmallItems] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      const sorted = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => b - a);
      for (let bp of sorted) {
        if (width >= bp) {
          setVisibleSmallItems(breakpoints[bp]);
          break;
        }
      }
    };

    handleResize();
    if (typeof window !== "undefined") window.addEventListener("resize", handleResize);
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("resize", handleResize);
    };
  }, [breakpoints]);

  const totalUnits = 2 + visibleSmallItems; // active item takes 2 units
  const unitWidthPercent = 100 / totalUnits;
  const transitionClass = hasTransition ? "transition-all duration-700 ease-in-out" : "";

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex ${transitionClass}`}
        style={{ transform: `translateX(-${activeIndex * unitWidthPercent}%)` }}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={`${item.id}-${index}`}
              className={`flex-shrink-0 px-2 ${transitionClass}`}
              style={{ width: isActive ? `${unitWidthPercent * 2}%` : `${unitWidthPercent}%` }}
            >
              <div className="w-full h-[320px] md:h-[400px] relative bg-gray-100 rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute bottom-6 left-6 project-button">
                  <span className="bg-[#EC4918] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const WeShare = ({ project }: { project?: string }) => {
  const [sliderData, setSliderData] = useState<SliderItem[]>(initialData);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hasTransition, setHasTransition] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(1);

    setTimeout(() => {
      setHasTransition(false);
      setSliderData((prev) => {
        const newArr = [...prev];
        newArr.push(newArr.shift()!);
        return newArr;
      });
      setActiveIndex(0);

      setTimeout(() => {
        setHasTransition(true);
        setIsAnimating(false);
      }, 50);
    }, 700);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    setHasTransition(false);
    setSliderData((prev) => {
      const newArr = [...prev];
      newArr.unshift(newArr.pop()!);
      return newArr;
    });
    setActiveIndex(1);

    setTimeout(() => {
      setHasTransition(true);
      setActiveIndex(0);
      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    }, 50);
  }, [isAnimating]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [handleNext, isHovered]);

  return (
    <section
      className="bg-[#f6f6f6] project-section py-12 md:py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">

        <div className="md:flex max-w-screen-xl weshare_description justify-between space-y-5 space-x-5 mx-auto mb-[10px] md:mb-[30px]">
          <h2 className=" text-[25px] md:text-[40px] font-semibold text-center md:text-left  ">
            We Share how <br /> to craft  <span className="text-red-500">Projects</span>

          </h2>
          <div className="description ml-0 text-[14px] md:w-[50%] md:text-left text-center">
            {project ? project : "  Unlock the secrets of successful product development with our expert insights. Learn through workshops, real-world case studies, and a supportive community. Empower yourself to bring your ideas to life with confidence. Join us on the path to creating remarkable products."}
          </div>
          <div className="flex gap-4">
            <button className="custom-arrow custom-prev" onClick={handlePrev}><Image src="/prevslide.png" alt="" width="70" height="50" /></button>
            <button className="custom-arrow custom-next" onClick={handleNext}><Image src="/nextslide.png" alt="" width="70" height="50" /></button>
          </div>
        </div>



      </div>
      <CustomSlider items={sliderData} activeIndex={activeIndex} hasTransition={hasTransition} />
    </section>
  );
};

export default WeShare;
