"use client"

import React, { useState } from 'react';


export default function MainPopup({ title }) {


  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    company: "",
    phone: "",
    project: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#f97316] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
       { title }
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >

            <div className="  md:top-0 relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
             
              <div className="border-0 text-left rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="w-full form-area md:pr-8 p-3 md:p-5">
                <button
                className="p-1 ml-auto bg-transparent border-0 text-black   float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black   h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
                  <h4 className="text-3xl font-semibold mb-4 pb-10">Get in Touch</h4>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Full Name:</label>
                        <input className='border-b outline-0' type="text" id="fullname" name="fullname" required onChange={handleChange}
                          value={formData.fullname} />
                      </div>

                      <div className="form-group">
                        <label>Email Address:</label>
                        <input className='border-b outline-0' type="email" id="email" name="email" required onChange={handleChange}
                          value={formData.email} />
                      </div>

                      <div className="form-group">
                        <label >Company Name:</label>
                        <input className='border-b outline-0' type="text" id="company" name="company" required onChange={handleChange}
                          value={formData.company} />
                      </div>

                      <div className="form-group">
                        <label >Phone Number:</label>
                        <input className='border-b outline-0' type="tel" id="phone" name="phone" required onChange={handleChange}
                          value={formData.phone} />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="project" className="block mb-2">
                        About Project:
                      </label>
                      <input
                        id="project"
                        name="project"
                        className="w-full px-4 py-2 border-b outline-0 rounded-md"
                        required
                        onChange={handleChange}
                        value={formData.project}
                      />
                    </div>
                    <div className='md:flex justify-between'>

                      <button
                        type="submit"
                        className="bg-orange-500 float-right h-10 text-white px-4 py-2 rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </form>

                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}