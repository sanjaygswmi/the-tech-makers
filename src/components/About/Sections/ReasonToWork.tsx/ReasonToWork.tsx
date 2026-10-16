"use client"

import React, { useEffect, useState } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Image from "next/image";
const ReasonToWork = () => {

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); // Close the currently open section if clicked again
      // console.log(activeAccordion);
    } else {
      setActiveAccordion(index); // Open the clicked section
      // console.log(activeAccordion);
    }
  };
  

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className="bg-[#F6F6F6] py-5">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="mx-auto heading-description py-5">
          <h2   className="heading text-center text-[25px] font-bold md:text-[40px]">
            Reason to Work with Us
          </h2>
          <p   className="description text-center ">
            The Tech Makers is the preferred digital marketing agency by
            commercial massive as well as start-ups who are seeming to get the
            most out of on limitless possibilities that digital marketing can
            provide. We strive to make the optimum use of technology for
            offering the finest when it comes to creating a strong brand
            awareness for our clients at several levels. The tech makers make
            sure that the customer is able to enjoy maximum advantages for the
            growth and expansion of their businesses. Our foremost aim is to
            deliver innovative solutions to emerging businesses and assist then
            in reaching their customers faster.
          </p>
        </div>
        <div    className="md:flex space-x-5">
          <div className="flex gap-2 space-x-5 md:w-1/2 w-full">
            <div  className="first-img-container">
              <Image width={500} height={500} src="/about-reason.png" alt="" />
            </div>
            <div className="mx-auto double-img-container">
              <div className="third-img-container">
                <Image width={500} height={500} className="mx-auto" src="/about-reason3.png" alt="" />
              </div>
              <div className="my-2 second-img-container">
                <Image width={500} height={500} className="mx-auto" src="/about-reason2.png" alt="" />
              </div>
            </div>
          </div>
          <div    className="md:w-1/2 w-full">
            <div id="accordion-collapse" data-accordion="collapse">
              <div className={`${activeAccordion === 1 || activeAccordion === null ? "bg-[white] p-5 shadow-[0px 10px 60px 0px rgba(0, 0, 0, 0.10);] p-2" :"border-b border-[#bcb6b6]" } pb-10  mb-10`}>
                <h2 id="accordion-collapse-heading-1 border border-b  ">
                  <button
                    type="button"
                    className={`flex gap-3 mb-3 items-center justify-between w-auto font-medium text-left text-gray-500   ${
                      activeAccordion === 1 ? "active flex gap-5 " : ""
                    }`}
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded={activeAccordion === 1}
                    aria-controls="accordion-collapse-body-1"
                    onClick={() => toggleAccordion(1)}
                  >  <span className="w-6"><Image width={500}
                                    height={500} src="/reason1.png" alt="" /></span>  
                    <span className={`${activeAccordion === 1 ? "text-red-500" :"px-5" }`}>Reliability</span>
                  </button>
                </h2>
                {activeAccordion === 1 || activeAccordion === null ? (
                  <div 
                    id="accordion-collapse-body-1"
                    className={`  ${activeAccordion === 1 ? "open" : ""} `}
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                       The Tech Makers is a reliable Indian Owned Company that has expanded its operation successfully in India, Australia, and the USA.
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className={`${activeAccordion === 2 ? "bg-[white] p-5 shadow-[0px 10px 60px 0px rgba(0, 0, 0, 0.10);] p-2" :"border-b border-[#bcb6b6]" } pb-10 mb-10`}>
                <h2 id="accordion-collapse-heading-2">
                  <button
                    type="button"
                    className={`flex items-center mb-3 justify-between w-auto  font-medium text-left text-gray-500   ${
                      activeAccordion === 2 ? "active flex gap-5" : ""
                    }`}
                    data-accordion-target="#accordion-collapse-body-2"
                    aria-expanded={activeAccordion === 2}
                    aria-controls="accordion-collapse-body-2"
                    onClick={() => toggleAccordion(2)}
                  > <span className="w-6"><Image width={500}
                                    height={500} src="/reason2.png" alt="" /></span>  
                    <span className={`${activeAccordion === 2 ? "text-red-500" :"px-5" }`}>Solutions</span>
                  </button>
                </h2>

                {activeAccordion === 2 ? (
                  <div
                    id="accordion-collapse-body-2"
                    className={`  ${activeAccordion === 2 ? "open" : ""}`} 
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                 The Tech Makers is not just about providing services; we are about crafting innovative solutions that redefine industries. Our dedicated teams work relentlessly to develop tailor-made solutions that address the challenges and opportunities of the digital age. Whether it&apos;s revolutionizing healthcare with telemedicine platforms or streamlining logistics with cutting-edge software, our solutions are designed to empower businesses and drive success. Partner with us to unlock the potential of tomorrow&apos;s technology today.
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className={`${activeAccordion === 3 ? "bg-[white] p-5 shadow-[0px 10px 60px 0px rgba(0, 0, 0, 0.10);] p-2" :"border-b border-[#bcb6b6]" } pb-10 mb-10`}>
                <h2 id="accordion-collapse-heading-4 ">
                  <button
                    type="button"
                    className={`flex items-center mb-3 justify-between w-auto  font-medium text-left text-gray-500    ${
                      activeAccordion === 3 ? "active flex gap-5" : ""
                    }`}
                    data-accordion-target="#accordion-collapse-body-4"
                    aria-expanded={activeAccordion === 3}
                    aria-controls="accordion-collapse-body-3"
                    onClick={() => toggleAccordion(3)}
                  ><span className="w-6"><Image width={500}
                                    height={500} src="/reason3.png" alt="" /></span>  
                    <span className={`${activeAccordion === 3 ? "text-red-500" :"px-5" }`}>Services</span>
                  </button>
                </h2>

                {activeAccordion === 3 ? (
                  <div
                    id="accordion-collapse-body-3"
                    className={`  ${activeAccordion === 3 ? "open" : ""}`}
                    aria-labelledby="accordion-collapse-heading-3"
                  >
                  At The Tech Makers, our commitment to excellence is mirrored in our comprehensive range of services. From software development and IT consulting to digital transformation and cloud solutions, we offer a diverse portfolio of services to cater to the unique needs of our clients. With a team of seasoned experts and a customer-centric approach, we are your go-to partner for all your technology requirements.


                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className={`${activeAccordion === 4 ? "bg-[white] p-5 shadow-[0px 10px 60px 0px rgba(0, 0, 0, 0.10);] p-2" :"border-b border-[#bcb6b6]" } pb-10 mb-10`}>
                <h2 id="accordion-collapse-heading-4">
                  <button
                    type="button"
                    className={`flex items-center mb-3 justify-between w-auto   font-medium text-left text-gray-500  ${
                      activeAccordion === 4 ? "active flex gap-5" : ""
                    }`}
                    data-accordion-target="#accordion-collapse-body-4"
                    aria-expanded={activeAccordion === 4}
                    aria-controls="accordion-collapse-body-4"
                    onClick={() => toggleAccordion(4)}
                  ><span className="w-6"><Image width={500}
                                    height={500} src="/reason4.png" alt="" /></span>  
                    <span className={`${activeAccordion === 4 ? "text-red-500" :"px-5" }`}>Experience</span>
                  </button>
                </h2>

                {activeAccordion === 4 ? (
                  <div
                    id="accordion-collapse-body-4"
                    className={`    ${activeAccordion === 4 ? "open" : ""}`}
                    aria-labelledby="accordion-collapse-heading-4"
                  >
                   The Tech Makers boasts a rich history of innovation and success, carving a path of excellence in the technology industry. With a firm foundation in India, this Indian-owned company has not only conquered its home turf but has also spread its wings across continents, including Australia and the USA. Our experience spans decades, with a proven track record of delivering cutting-edge solutions and services to a global clientele.
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonToWork;
