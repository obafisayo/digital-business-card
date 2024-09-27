import React, { useState } from 'react';
import { HiOutlineIdentification } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APP, CONTACTS, SIGNUP, URL } from '../../../routes/RoutesConstant';

const Signin = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const url = URL;
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message before login attempt

    try {
      const response = await axios.post(`${url}/user/login`, loginData);

      if (response.status === 200) {
        const { accessToken } = response.data;

        if (accessToken) { // Ensure accessToken is defined
          localStorage.setItem('token', accessToken);
          localStorage.setItem('tokenExpiration', Date.now() + 10000000 * 1000);
          navigate(APP);
        } else {
          throw new Error('Token not received');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);

      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage('Login failed: Unauthorized. Please check your username and password.');
        } else {
          setErrorMessage(`Login failed: ${error.response.data.message || ' Please check your username and password.'}`);
        }
      } else if (error.request) {
        setErrorMessage('Login failed: No response from server.');
      } else {
        setErrorMessage('Login failed: Unknown error.');
      }
    }
  };

  return (
    <div className='min-h-screen flex justify-center md:bg-[#1677ff] sm:bg-white'>
      <div className='w-[28rem] h-[42rem] bg-[#F7FAFC] mt-12 mb-12 rounded-[1rem]'>
        <div className='flex flex-row gap-3 items-center justify-center mt-6'>
          <HiOutlineIdentification size={60} color='#1677ff' />
          <h2 className='text-[#1677ff] text-[40px] tracking-widest'>Bizln</h2>
        </div>
        <h2 className='text-[24px] mt-4 font-normal text-center'>Login to your account</h2>
        <p className='text-center mt-4 font-normal text-gray-600'>
          Don't have an account? <Link to={SIGNUP}>Sign up</Link>
        </p>
        <form onSubmit={handleLoginSubmit} className='flex flex-col gap-5 pl-10 pt-4'>
          <label className='font-semibold' htmlFor='username'>Enter your username</label>
          <input 
            type="text" 
            name="username" 
            id="username"
            onChange={handleLoginChange}
            value={loginData.username}
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
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>

        <div className='flex flex-col justify-center items-center'>
          <h3 className='font-normal text-gray-600 mt-4'>Having trouble logging in?</h3>
          <Link to={CONTACTS}>Contact us</Link>
        </div>
        <p className='text-center text-[13px] mt-4 text-gray-600 px-4'>
          By continuing, you acknowledge that you have read, understood, and agree to our terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default Signin;
