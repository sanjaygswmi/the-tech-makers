import React, { useState } from 'react';

function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='px-3 '>
      <button
        className="block text-white bg-[#F48B3A] rounded mt-8 font-medium px-5 py-2.5 text-center"
        type="button"
        onClick={toggleModal}
      >
        Apply Now
      </button>

      {isModalVisible && (
        <div className="fixed apply-form md:w-1/2 py-10 my-3 sm:px-5  px-20 z-1 rounded-md text-white mx-auto top-0 left-0 right-0 z-50 h-auto p-4 overflow-x-hidden overflow-y-hidden bg-[#323E48] md:inset-0">
          <div className="relative rounded-lg bg-[#323E48]">
            <div className="flex items-start justify-between rounded-t">
              <h3 className="text-xl font-semibold text-white text-white">
                Job Application
              </h3>
              <button
                type="button"
                className="text-red-500 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                onClick={hideModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close Button</span>
              </button>
            </div>

            <div className='py-8'>
              <form method="POST">
                <label className='mb-0' >Enter your Full Name</label>
                <input className='border-b w-full border-white bg-transparent outline-none text-white' type="text" id="full_name" name="full_name" required />

                <label className='mt-5 mb-0'>Your Email</label>
                <input className='border-b w-full border-white bg-transparent outline-none text-white' type="email" id="email" name="email" required />

                <label className='mt-5 mb-0'>Your Phone Number</label>
                <input className='border-b w-full border-white bg-transparent outline-none text-white' type="tel" id="phone_number" name="phone_number" required />

                <label className='mt-5 mb-0'>What would you like us to know about you?</label>
                <input className=' border-b  border-white   w-full  bg-transparent outline-none text-white' type="about" id="about" name="about" required />

                <label className="flex justify-center w-full h-20 px-4 mt-10 transition bg-[#323e48] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg><br/>
                    <span className="font-normal text-white">
                      Drop files to Attach<br/>  or 
                      <span className="text-blue-600 text-center mx-auto underline"> browse</span>
                    </span>
                  </span>
                  <input type="file" name="file_upload" className="hidden" />
                </label>
                <input className="text-white cursor-pointer mt-4 bg-[#F48B3A] float-right font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit" value="APPLY NOW" />
              </form>
            </div>


          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
