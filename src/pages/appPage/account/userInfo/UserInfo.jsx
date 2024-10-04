import React from 'react';

const UserInfo = ({ username, email, handleChange }) => {
  return (
    <>
      <div className='flex items-center'>
        <label htmlFor='username' className='font-semibold w-3/12'>Username</label>
        <div className='flex items-center h-[3rem] rounded-lg border border-gray-300 md:w-5/12 w-9/12'>
          <input
            id='username'
            type="text"
            value={username}
            onChange={(e) => handleChange('username', e.target.value)}
            className='pl-2 w-full focus:outline-primary h-full rounded-lg bg-brandOffwhite'
          />
        </div>
      </div>

      <hr className='mt-[1rem]' />

      <div className='flex items-center mt-4'>
        <label htmlFor='email' className='font-semibold w-3/12'>Email</label>
        <div className='flex items-center h-[3rem] rounded-lg border border-gray-300 md:w-5/12 w-9/12'>
          <input
            id='email'
            type="email"
            value={email}
            onChange={(e) => handleChange('email', e.target.value)}
            className='pl-2 w-full focus:outline-primary h-full rounded-lg bg-brandOffwhite'
          />
        </div>
      </div>

      <hr className='mt-[1rem]' />
    </>
  );
};

export default UserInfo;
