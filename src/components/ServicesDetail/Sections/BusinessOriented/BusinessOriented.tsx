"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

interface BusinessOrientedProps {
  business: string;
  title: string;
}

const BusinessOriented = ({ business, title }: BusinessOrientedProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[#F6F6F6] py-10" aria-labelledby="business-oriented-heading">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="gap-8 md:flex md:items-center">
          <div className="md:w-1/2">
            <Image
              width={500}
              height={500}
              className="h-auto w-full"
              src="/ServiceDetail/business.png"
              alt=""
            />
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h2 id="business-oriented-heading" className="mb-6 text-2xl font-bold md:text-4xl">
              A business-focused approach to{" "}
              <span className="text-[#E05A32]">{title}</span>
            </h2>
            <p className="text-sm leading-7 text-gray-700">{business}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOriented;
