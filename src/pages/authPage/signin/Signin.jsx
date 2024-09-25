import React, { useState } from 'react';
import { HiOutlineIdentification } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const url = 'https://bizln.isaac0yen.com';
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/user/login`, loginData);
      console.log(response.data);

      // If login is successful, navigate to the home page
      if (response.status === 200) {
        alert('Login successful!');
        navigate('/'); // Navigate to the home page
      }
    } catch (error) {
      console.error('Login failed:', error);

      if (error.response) {
        console.error('Error response:', error.response.data);
        if (error.response.status === 401) {
          alert('Login failed: Unauthorized. Please check your email and password.');
        } else {
          alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
        }
      } else if (error.request) {
        console.error('Error request:', error.request);
        alert('Login failed: No response from server.');
      } else {
        console.error('Error message:', error.message);
        alert('Login failed: ' + error.message);
      }

      console.log('Login data at the time of error:', loginData);
    }
  };

  return (
    <div className='min-h-screen flex justify-center md:bg-[#1677ff] sm:bg-white'>
      <div className='w-[28rem] h-[42rem] bg-[#F7FAFC] mt-12 mb-12 rounded-[1rem]'>
        <div className='flex flex-row gap-3 items-center justify-center mt-6'>
          <HiOutlineIdentification size={60} color='#1677ff' />
          <h2 className=' text-[#1677ff] text-[40px] tracking-widest'>Bizln</h2>
        </div>
        <h2 className='text-[24px] mt-4 font-normal text-center'>Login in to your account</h2>
        <p className='text-center mt-4 font-normal text-gray-600'>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <form onSubmit={handleLoginSubmit} className='flex flex-col gap-5 pl-10 pt-4'>
          <label className='font-semibold' htmlFor='email'>Enter your email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            onChange={handleLoginChange}
            value={loginData.email}
            className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff]'
          />
          <label className='font-semibold' htmlFor='password'>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            onChange={handleLoginChange}
            value={loginData.password}
            className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff]'
          />
          <button className='bg-[#1677ff] w-[23rem] p-2 font-semibold text-white rounded-md' type='submit'>
            Login
          </button>
        </form>

        <div className='flex flex-col justify-center items-center'>
          <h3 className='font-normal text-gray-600 mt-4'>Having trouble logging in?</h3>
          <a href="/contact">Contact us</a>
        </div>
        <p className='text-center text-[13px] mt-4 text-gray-600 px-4'>
          By continuing, you acknowledge that you have read, understood, and agree to our terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default Signin;
