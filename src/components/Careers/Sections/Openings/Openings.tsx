"use client"

import { useState } from 'react';
import{ Jobs }from "./OpeningData"
import Modal from './ApplyPopup';
function Accordion() {
 

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index:number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div id="accordion-flush" className="accordion max-w-screen-xl  px-3  py-16 mx-auto" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
      <h2 className='text-[28px] font-semibold mb-5'>Current Openings</h2>
      <div className=' md:px-28'>
      {Jobs.map((item, index) => (
        <div className='mt-5' key={index} >
        <div className='shadow-accordian px-4  py-2'> 
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className='text-[#E05A32]'>{item.title}</span>
            <svg
              className={`w-3 h-3 rotate-${activeIndex === index ? '0' : '180'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        <div className='sm:block text-[#676767] md:flex justify-between mb-2'>  
         <span>E-53, Block G, Sector 3, Noida</span><span></span>Openings : {item.vacancy} <span>Experience : {item.experience}</span>
         </div>
          {activeIndex === index && (
            <div className="py-5">
              <div>
                <h2 className='font-bold text-[20px] my-3'>Position Summary</h2>
                <p className='text-sm'>{item.PositionSummary}</p>
             </div>
             <div>
                <h2 className='font-bold text-[20px] my-3'>Role and Responsibilities</h2>
                <p className='text-sm'>{item.RoleandResponsibilities}</p>
             </div>
             <div>
                <h2 className='font-bold text-[20px] my-3'>Skills and Qualifications</h2>
                <p className='text-sm'>{item.SkillsandQualifications}</p>
             </div>
                <Modal/>
              </div>
          )}
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Accordion;
