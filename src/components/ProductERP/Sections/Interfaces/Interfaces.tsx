import React from "react";
import Image from "next/image";
const Interfaces =()=>{

    return (
        <div className="md:flex max-w-screen-xl mx-auto my-16 justify-between">
            <div className="md:w-1/2">
                <h2 className="md:text-[30px] text-[25px] text-center md:text-left font-semibold">These interfaces of information <br/> <span className="text-[#E05A32]">distribution </span>can be used to share  <br/>  or distribute information about  <br/>  the <span className="text-[#1B76FF]">Students</span></h2>
               <ul  className="list-disc mx-auto px-8">
                <li  >Fees account status</li>
                <li   >Attendance status</li>
                <li   >Exam Result status</li>
                <li  >Home assignments</li>
                <li  >Test schedules and syllabus</li>
                <li  >Automated Fees reminders</li>
                <li  >Vacancies for Staff</li>
                <li  >Students Registration Notices and many others purposes as required by the Institutions from time to time</li>
                 
               </ul>
            </div>
            <div className="md:w-1/2"><Image width={500}
                                    height={500} src="/products/detail/Layer.png" alt="" /></div>
        </div>
    )
}


export default Interfaces