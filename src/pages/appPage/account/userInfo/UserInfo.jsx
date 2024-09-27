import React from 'react';

const UserInfo = ({ username, email, handleChange }) => {
  return (
    <>
      <div className='flex items-center gap-[10.5rem] md:gap-[26rem]'>
        <p className='font-semibold'>Username</p>
        <div className='flex items-center w-[16rem] h-[3rem] rounded-lg border border-gray-300'>
          <input
            type="text"
            value={username}
            onChange={(e) => handleChange('username', e.target.value)}
            className='pl-2 w-full focus:outline-red-500 h-full rounded-lg'
          />
        </div>
      </div>

      <hr className='mt-[1rem]' />

      <div className='flex items-center gap-[9rem] md:gap-[26rem] mt-4'>
        <p className='font-semibold'>Email</p>
        <div className='flex items-center w-[16rem] h-[3rem] rounded-lg border border-gray-300'>
          <input
            type="email"
            value={email}
            onChange={(e) => handleChange('email', e.target.value)}
            className='pl-2 w-full focus:outline-red-500 h-full rounded-lg'
          />
        </div>
      </div>

      <hr className='mt-[1rem]' />
    </>
  );
};

export default UserInfo;
