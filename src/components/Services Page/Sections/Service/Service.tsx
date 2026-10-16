
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { data } from "../../../constant";
import IndustryCulture from '@/src/components/Home Page/Sections/Industry Culture/IndustryCulture';
import WeShare from '@/src/components/Home Page/Sections/WeShare/WeShare';

const Service = () => {
  return (
    <div>
      <div className='mx-auto service_section_mapData map-data '>
        {data.map((item, key) => {
          const backgroundColors = ['black', '#FDE284', '#FF9559', '#00CA8E', '#499DFF', "#C1EBFF", "#FFDFFA", "#64E9A5", "#985DF6"];
          const backgroundColor = backgroundColors[key % backgroundColors.length];

          // Check if this is the first element (key === 0)
          const isFirstElement = key === 0;

          // Define a class or inline style for the text color based on whether it's the first element
          const textColorStyle = isFirstElement ? { color: 'white' } : {};

          return (
            <div key={key} style={{ backgroundColor }} className='px-5 hvr-sweep-to-left_serice -mb-5 outer-section py-16'>
              <div className='services_page-services-section px-3 mx-3 md:flex text-black mx-auto max-w-screen-xl justify-between '>
                <div className='text-side' >
                  <div    className='uppercase title mt-3'> {item.title}</div>
                  <div    className='uppercase heading mt-8 text-[40px] font-bold'>
                    {item.heading}
                  </div>
                  <div className='description mt-5'>{item.description}</div>
                  <div  >
                    <ul className='list mt-8 list-outside list-disc '>
                      <li className='mt-2'>{item.list.item1}</li>
                      <li className='mt-2'>{item.list.item2}</li>
                      <li className='mt-2'>{item.list.item3}</li>
                      <li className='mt-2'>{item.list.item4}</li>
                      <li className='mt-2'>{item.list.item5}</li>
                      <li className='mt-2'>{item.list.item6}</li>
                      <li className='mt-2'>{item.list.item7}</li>
                      <li className='mt-2'>{item.list.item8}</li>
                      <li className='mt-2'>{item.list.item9}</li>
                      <li className='mt-2'>{item.list.item10}</li>
                    </ul>
                  </div>
                  <div    className='mt-8'>
                    <Link href={`/services/${item.slug}`} className='border-black service_view_more_link border px-5 py-2 text-black rounded'>{item.button_text}</Link>
                  </div>
                </div>
                <div className='images mt-8 text-center'>
                  <Image className='md:float-right w-full h-auto' width={500} height={500} src={item.image} alt="" />
                </div>
              </div>

            </div>
          );
        })}
      </div>


      <IndustryCulture />
      <WeShare />
    </div>
  )
}

export default Service




