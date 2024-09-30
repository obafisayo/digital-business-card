import React, { useState } from 'react';

const MultiStepForm = ({ isVisible, closePopup  }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    title: '',
    phoneNumber: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, 
        [name]: value 
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    closePopup();
  };

  if(!isVisible) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg max-w-lg w-[80%] md:w-full'>
        <h2 className='text-xl text-center pb-4 font-semibold'>Create your business card</h2>

        <div className='w-full flex justify-between items-center mb-4'>
            <div className={`flex-1 h-2.5 mx-1 ${step >= 1 ? 'bg-gray-500' : 'bg-gray-300'} rounded-l-full`}></div>
            <div className={`flex-1 h-2.5 mx-1 ${step >= 2 ? 'bg-gray-500' : 'bg-gray-300'}`}></div>
            <div className={`flex-1 h-2.5 mx-1 ${step >= 3 ? 'bg-gray-500' : 'bg-gray-300'} rounded-r-full`}></div>
        </div>


        <form>
          {step === 1 && (
            <div>
                <h2 className='text-center text-[18px]'>First, write your name</h2>
              <label className='font-semibold' htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                onChange={handleInputChange}
                value={formData.name}
                className='w-full p-2 mb-4 border-b border-b-gray-300 bg-transparent focus:outline-none focus:border-b-gray-300'
                />
              <div className='flex justify-center mt-10'>
              <button className=' bg-[#1677ff] text-white py-2 px-8 rounded-md' onClick={handleNext}>
                Next
              </button>
              </div>
              
            </div>
          )}

          {step === 2 && (
            <div>
              <label className='font-semibold' htmlFor='title'>Title</label>
              <input
                type='text'
                name='title'
                id='title'
                onChange={handleInputChange}
                value={formData.title}
                className='w-full p-2 mb-4 border-b border-b-gray-300 bg-transparent focus:outline-none focus:border-b-gray-300'
              />
              <label className='font-semibold' htmlFor='company'>Company</label>
              <input
                type='text'
                name='company'
                id='company'
                onChange={handleInputChange}
                value={formData.company}
                className='w-full p-2 mb-4 border-b border-b-gray-300 bg-transparent focus:outline-none focus:border-b-gray-300'
              /> 
              <div className='flex justify-between mt-10'>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-md' onClick={handlePrev}>
                  Back
                </button>
                <button className='bg-[#1677ff] text-white py-2 px-4 rounded-md' onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className='font-semibold' htmlFor='PhoneNumber'>Phone Number :</label>
              <input
                type='tel'
                name='phoneNumber'
                id='PhoneNumber'
                onChange={handleInputChange}
                value={formData.phoneNumber}
                className='w-full p-2 mb-4 border-b border-b-gray-300 bg-transparent focus:outline-none focus:border-b-gray-300'
              />
              <div className='flex justify-between mt-10'>
                <button className='bg-gray-500 text-white py-2 px-4 rounded-md' onClick={handlePrev}>
                  Back
                </button>
                <button className='bg-[#1677ff] text-white py-2 px-4 rounded-md' onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
