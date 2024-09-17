import React from 'react';
import {HiOutlineIdentification} from 'react-icons/hi';
import Link from 'antd/es/typography/Link';
import {FaFacebook} from 'react-icons/fa'

const Signin = () => {
  return (
    <div className='min-h-screen flex justify-center md:bg-[#1677ff] sm:bg-white'>
        <div className='w-[28rem] h-[46rem] bg-[#F7FAFC] mt-12 mb-12 rounded-[1rem]'>
            <div className='flex flex-row gap-3 items-center justify-center mt-6'>
              <HiOutlineIdentification size={60} color='#1677ff' />
              <h2 className=' text-[#1677ff] text-[40px] tracking-widest'>Bizln</h2>
            </div>
            <h2 className='text-[24px] mt-4 font-normal text-center'>Create account to get started?</h2>
            <p className='text-center mt-4 font-normal text-gray-600'>Already have an account? <Link>Log in</Link></p>
            <form className='flex flex-col gap-5 pl-10 pt-4'>
              <label className='font-semibold' htmlFor='email'>Email</label>
              <input 
              type="email" 
              name="email" 
              id="email"
              className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff]'
              />
              <label className='font-semibold' htmlFor='email'>Password</label>
              <input 
              type="password" 
              name="password" 
              id="password"
              className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff]'
              />
              <label className='font-semibold' htmlFor='email'>Verify Password</label>
              <input 
              type="password" 
              name="password" 
              id="password"
              className='w-[23rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1677ff]'
              />
              <button className='bg-[#1677ff] w-[23rem] p-2 font-semibold text-white rounded-md' type='submit'>Submit</button>
            </form>
            <div className='flex flex-row items-center justify-center gap-2 mt-4'>
              <hr className='w-[7rem] text-gray-400' />
              <p>or continue with</p>
              <hr className='w-[7rem] text-gray-400'/>
            </div>
             <div className='flex flex-wrap px-4 justify-center  mt-4 gap-3'>
                <div className='flex gap-2 items-center border bg-white p-2 rounded-md border-gray-300'>
                  <FaFacebook color='#1677ff' />
                  <h2 className='text-[13px]'>Sign in with google</h2>
                </div>
                <div className='flex gap-2 items-center border bg-white p-2 rounded-md border-gray-300'>
                  <FaFacebook color='#1677ff' />
                  <h2 className='text-[13px]'>Sign in with google</h2>
                </div>
                <div className='flex gap-2 items-center border bg-white p-2 rounded-md border-gray-300'>
                  <FaFacebook />
                  <h2 className='text-[13px]'>Sign in with google</h2>
                </div>
                <div className='flex gap-2 items-center border bg-white p-2 rounded-md border-gray-300r'>
                  <FaFacebook />
                  <h2 className='text-[13px]'>Sign in with google</h2>
                </div>
            </div>
    
        </div>
        </div>
  )
}

export default Signin;
