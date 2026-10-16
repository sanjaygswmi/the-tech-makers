import React from "react";
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./Sections/Banner/Banner'));
const Content = dynamic(() => import('./Sections/Content/Content'));
const Footer = dynamic(() => import('../Footer2/Footer'));
const ContactForm = dynamic(() => import('./Sections/Form/ContactForm'));

// Usage of the dynamically imported components
// e.g., <Banner />

const Contact = () => {
  return (
    <div className="contact_page mt-16 mx-auto ">
      <Banner />
      <Content />
      <ContactForm />
    </div>
  );
};

export default Contact;
