import React from 'react';
import {HiOutlineIdentification} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

const Signup = () => {
    const [register, setRegister] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    const url = 'https://codeguru.isaac0yen.com';
    const navigate = useNavigate();
  
    const handleRegisterChange = (e) => {
      const { name, value } = e.target;
      setRegister({ ...register, [name]: value });
    };
  
    const handleregisterSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${url}/api/users/register`, register);
        alert('Register successful!');
        localStorage.setItem('user', JSON.stringify(response.data));
        console.log(response.data)
        navigate('/');
      } catch (error) {
        console.error('Register failed:', error);
      }
    };

  return (
    <div className='min-h-screen flex justify-center md:bg-[#1677ff] sm:bg-white'>
        <div className='w-[28rem] h-[40rem] bg-[#F7FAFC] mt-12 mb-12 rounded-[1rem]'>
            <div className='flex flex-row gap-3 items-center justify-center mt-6'>
              <HiOutlineIdentification size={60} color='#1677ff' />
              <h2 className=' text-[#1677ff] text-[40px] tracking-widest'>Bizln</h2>
            </div>
            <h2 className='text-[24px] mt-4 font-normal text-center'>Create account to get started?</h2>
            <p className='text-center mt-4 font-normal text-gray-600'>Already have an account? <Link to='/auth/signin'>Log in</Link></p>
            <form onSubmit={handleregisterSubmit} className='flex flex-col gap-5 pl-10 pt-4'>
            <label className='font-semibold' htmlFor='username'>Username</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              onChange={handleRegisterChange}
              value={register.name}
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
              <label className='font-semibold' htmlFor='email'>Password</label>
              <input 
              type="password" 
              name="password" 
              id="password"
              onChange={handleRegisterChange}
              value={register.password}
              className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff]'
              />
              <Link to="/app/account"><button className='bg-[#1677ff] w-[23rem] p-2 font-semibold text-white rounded-md' type='submit'>Submit</button></Link>
            </form>
        </div>
        </div>
  )
}

export default Signup;
