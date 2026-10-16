"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const industries = [
  { label: "Healthcare", href: "/industries/healthcare-solutions", image: "/healthcare.png" },
  { label: "Cloud Solutions", href: "/industries/cloud-solutions", image: "/cloud.png" },
  { label: "E-commerce", href: "/industries/e-commerce-solutions", image: "/e-commerce.png" },
  { label: "Sports", image: "/sports.png" },
  { label: "Gaming", href: "/industries/gaming-solutions-and-services", image: "/gaming.png" },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality", image: "/travel.png" },
  { label: "Insurance", href: "/industries/insurance-software-solutions", image: "/insurance.png" },
  { label: "Real Estate", href: "/industries/real-estate-solutions", image: "/realestate.png" },
  { label: "Marketing & Advertising", href: "/industries/advertising-industry", image: "/marketting.png" },
  { label: "Automotive", href: "/industries/automobile", image: "/automobile.png" },
  { label: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain", image: "/logistics.png" },
  { label: "Education", href: "/industries/education", image: "/education.png" },
  { label: "Manufacturing", href: "/industries/manufacturing-solutions-and-services", image: "/manufacturing.png" },
  { label: "Media & Entertainment", href: "/industries/media-entertainment", image: "/media.png" },
  { label: "Technology & Consulting", href: "/industries/tech-driven-consulting", image: "/technology.png" },
];

const IndustryCulture = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="max-w-screen-xl px-3 industry-culture-section py-16 mx-auto" aria-labelledby="industries-heading">
      <div>
        <div className="icon_heading relative">
          <div className="border-dashed border icon hidden md:block mt-5 rounded-md border-black px-2 py-1">Industries we serve</div>
          <div className="text-center font-semibold text-[25px] md:text-[40px] heading">
            <h2 id="industries-heading">Software solutions shaped around</h2>
            <h2><span className="text-[#EC4918]">industry</span> needs.</h2>
          </div>
        </div>
        <p className="description md:w-1/2 mx-auto text-center my-2 text-sm">
          We help organisations plan and build digital experiences, business workflows, and software around their users, systems, and goals. Explore the industries with dedicated solution pages, or contact us to discuss a different sector.
        </p>
      </div>
      <div className="flex flex-wrap my-6 gap-4 justify-center">
        {industries.map((industry) => {
          const content = (
            <>
              <span className="text-sm font-medium">{industry.label}</span>
              <Image width={500} height={500} className="image w-10 h-10 object-contain" src={industry.image} alt="" />
            </>
          );

          return industry.href ? (
            <Link key={industry.label} href={industry.href} className="flex items-center gap-3 rounded-md border border-gray-200 px-4 py-3 hover:border-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              {content}
            </Link>
          ) : (
            <div key={industry.label} className="flex items-center gap-3 rounded-md border border-gray-200 px-4 py-3 text-gray-600" aria-label={industry.label + " industry page coming later"}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustryCulture;
