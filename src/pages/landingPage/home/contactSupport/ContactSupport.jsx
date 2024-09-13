// ContactSupport.jsx
import React from 'react';
import InputField from '../../../../components/inputField/InputField';

const ContactSupport = () => {
  return (
    <section id='contact'>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 pt-28">
            <h1 className="text-4xl font-bold text-center mb-2">Get in touch with our sales team</h1>
            <h2 className="text-lg text-gray-600 text-center mb-6">We're here to help you!</h2>
            <form className="w-full max-w-5xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="First Name*" required />
                <InputField label="Last Name*" required />
                </div>
                
                <InputField label="Work Email*" type="email" required placeholder="Please provide your company email address" />
                
                <InputField label="Phone Number*" type="tel" required placeholder="Please include your country code" isPhone />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Job Title" />
                <InputField label="Website URL" type="url" />
                </div>
                
                <InputField label="Number of Employees at Company*" type="number" required placeholder="What is the total number of employees at your company?" />
                
                <button
                type="submit"
                className="w-fit py-3 px-12 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out"
                >
                Submit
                </button>
            </form>
        </div>
    </section>
  );
};

export default ContactSupport;
