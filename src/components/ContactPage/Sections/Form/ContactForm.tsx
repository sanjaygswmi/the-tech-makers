"use client"

import Recaptcha from '../../../Footer/Recaptcha'
import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [services, setServices] = useState([]);

    const handleSubmit = () => {

        // Here, you can implement the logic to submit the form data
        // console.log('Form data:', { name, email, phoneNumber, services });
    };

    return (
        <div className='bg-[#323E48]  contact-form py-16  '>
            <div className='mx-auto md:w-1/2 contact-form-div mb-10 text-white'>
                <h2 className='text-[20px] font-bold mb-6'>Fill out the form and we will be in touch.</h2>
                <form onSubmit={handleSubmit}>
                    <label className='mt-5'>
                        What’s Your Name?
                    </label>
                    <input className='border-b w-full border-gray-500 outline-none' type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <br />
                    <label className='mt-5'>
                        Your Email
                    </label>
                    <input className='border-b w-full border-gray-500 outline-none' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <br />
                    <label className='mt-5'>
                        Would you like to add a phone number?
                    </label>
                    <input className='border-b w-full border-gray-500 outline-none' type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                    <br />

                    <div className='font-semibold mt-6 text-[17px]'>Services that interest you*</div>
                    <div className='grid mt-3 sm:grid-cols-2 xs:grid-cols-1 gap-10  md:grid-cols-3'>
                        <div>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                eCommerce development
                            </label>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                Web Development
                            </label>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                App Development
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                Creative Design
                            </label>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                Shopify
                            </label>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                Wordpress
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                Redesign
                            </label>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                Degital Marketing
                            </label>
                            <label>
                                <input type="checkbox"  className="checkbox"/>
                                Other
                            </label>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <label className='mt-5'>Briefly describe your Request</label>
                        <input className='outline-none w-full border-b border-gray-500' type="text" name="" id="" />
                    </div>
                    <div className='md:flex mt-5 justify-between'>
              <Recaptcha />
             
            <button
              type="submit"
              className="bg-orange-500 float-right h-10 text-white px-4 py-2 rounded-md"
            >
              Submit
              </button>
              </div> </form>
            </div>
        </div>
    );
};

export default ContactForm;
