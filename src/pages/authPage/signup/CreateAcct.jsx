import React, { useState } from 'react';
import { HiOutlineIdentification } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SIGNIN, URL } from '../../../routes/RoutesConstant';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import eye icons

const Signup = ({ onSuccessfulSignUp }) => {
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const url = URL;
  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/user`, register);
      alert('Registration successful! Please log in.');
      onSuccessfulSignUp();
      navigate(SIGNIN); // Redirect to login page
      console.log(response.data);
      
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.response) {
        alert(`Registration failed: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        alert('Registration failed: No response from server.');
      } else {
        alert('Registration failed: ' + error.message);
      }
    }
   
  };

  return (
    <div className='min-h-screen flex justify-center md:bg-[#1677ff] sm:bg-white'>
      <div className='w-[28rem] h-[40rem] bg-[#F7FAFC] mt-12 mb-12 rounded-[1rem]'>
        <div className='flex flex-row gap-3 items-center justify-center mt-6'>
          <HiOutlineIdentification size={60} color='#1677ff' />
          <h2 className='text-[#1677ff] text-[40px] tracking-widest'>Bizln</h2>
        </div>
        <h2 className='text-[24px] mt-4 font-normal text-center'>Create account to get started!</h2>
        <p className='text-center mt-4 font-normal text-gray-600'>
          Already have an account? <Link to={SIGNIN}>Log in</Link>
        </p>
        <form onSubmit={handleRegisterSubmit} className='flex flex-col gap-5 pl-10 pt-4'>
          <label className='font-semibold' htmlFor='username'>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleRegisterChange}
            value={register.username}
            className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff]'
          />
          <label className='font-semibold' htmlFor='email'>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleRegisterChange}
            value={register.email}
            className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff]'
          />
          <label className='font-semibold' htmlFor='password'>Password</label>
          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              name="password"
              id="password"
              onChange={handleRegisterChange}
              value={register.password}
              className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff] pr-10' // Added padding to the right
            />
            <span 
              className='absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer' 
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? <HiEyeOff size={24} className="text-primary" /> : <HiEye size={24} className="text-primary" />} {/* Eye icon */}
            </span>
          </div>
          <button className='bg-[#1677ff] w-[23rem] p-2 font-semibold text-white rounded-md' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
