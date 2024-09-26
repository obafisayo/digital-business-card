import React from 'react';
import { useState } from 'react';

const Account = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('');

  return (
    <div className='ml-[3rem] mt-[2rem] mr-[3rem]'> 
      <h2 className='font-bold text-[24px] text-[#111827]'>Account</h2>
      <div className='flex items-center gap-4'>
        <div className='flex justify-center items-center w-12 h-12 bg-[#111827] rounded-full my-10'>
          <p className='text-white font-semibold'>OO</p>
        </div>
        <div>
          <p className='font-bold'>Okunola</p>
          <p className='text-gray-500'>okunolaolubanjo@gmail.com</p>
        </div>
      </div>
      <div className='flex items-center gap-[10.5rem] md:gap-[26rem]'>
        <p className='font-semibold'>Name</p>
        <div className='flex items-center w-[12rem] h-[2rem] rounded-md border border-gray-300'>
          <p className='text-gray-600 pl-2'>Okunola</p>
        </div>
      </div>
      <hr className='mt-[1rem]' />
      <div className='flex items-center gap-[6.5rem] md:gap-[22rem] mt-4'>
      <p className='font-semibold'>Account Photo</p>
      <button><div className='flex items-center justify-center gap-2 w-[7.2rem] h-[1.6rem] rounded-md bg-gray-300'>
        <div>+</div>
        <p>Add Photo</p>
      </div></button>
      </div>
      <hr className='mt-[1rem]' />
      <div className='flex flex-row items-center gap-[11rem] md:gap-[26.5rem] mt-4'>
      <p className='font-semibold'>Email</p>
      <div className='flex flex-col gap-2'>
      <p className='text-gray-400 pl-2'>okunolaolubanjo@gmail.com</p>
      <div className='flex justify-center items-center w-[8rem] h-[2rem] rounded-md border border-gray-300'>
        <p className='text-gray-600 pl-2'>Change Email</p>
      </div>
      </div>
      </div>
      <hr className='mt-[1rem]' />
      <div className='flex flex-row items-center gap-[9.3rem] md:gap-[24.5rem] mt-4'>
      <p className='font-semibold'>Password</p>
      <div className='flex flex-col gap-3'>
      <div className='flex items-center w-[10rem] h-[2em] rounded-md border border-gray-100'>
        <p className='text-gray-600 pl-2'>ihihiiiiji</p>
      </div>
      <div className='flex items-center w-[10rem] h-[2rem] rounded-md border border-gray-300'>
        <p className='text-gray-600 pl-2'>Change password</p>
      </div>
      </div>
      </div>
      <hr className='mt-[1rem]' />
      <div className='flex items-center gap-[10.5rem] md:gap-[26rem] mt-4 mb-[4rem]'>
        <p className='font-semibold'>Delete</p>
        <div className='flex items-center w-[8rem] h-[2rem] rounded-md border border-[#DB2316]'>
          <p className='text-[#DB2316] pl-2'>Delete account</p>
        </div>
      </div>
      <hr className='mt-[1rem]' />
    </div>
  )
}

export default Account;
