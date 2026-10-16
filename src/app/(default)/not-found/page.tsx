import React from "react";

const page = () => {

    return (
        <div className="relative bg-gradient-to-r from-green-300 via-red-200 to-blue-300 h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
        >
            <div className="absolute top-0 right-0 bottom-0 left-0   opacity-75"></div>

            <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
                <h1 className="text-5xl text-blue-500">Page Not Found</h1>
              

                 
                <div className="mt-6 flex text-white mx-auto">
                    <a className="text-blue-500 font-bold" href="/">
                       Go to home
                    </a>
 
                </div>


            </div>

        </div>
    )
}

export default page