import React from "react";
import Image from "next/image";
const Concept = () => {
    
    return (
        <div className="max-w-screen-xl mx-auto py-8">
            <h2 className="text-center text-[25px] md:text-[40px] font-semibold">It’s Concept</h2>
            <p className="text-center">As an extension of the concept of ERP software solution, the information stored in centralized server can be shared with the Parents and other organizations related to the Institution through a</p>
       
            <div className="flex">
                
                <div ><Image width={1200}
                                    height={500} className="mx-auto my-10" src="/concepts.png" alt="" /></div>
               
            </div>
        </div>
    )
}

export default Concept