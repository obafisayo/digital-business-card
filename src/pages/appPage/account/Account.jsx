import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account = () => {
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState(''); 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [editingField, setEditingField] = useState(null);  

  const url = 'https://bizln.isaac0yen.com';  


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${url}/user`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        if (response.status === 200) {
          const { username, email } = response.data;
          setUsername(username);
          setEmail(email);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []); 

  const handleUpdate = async () => {
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem('token');

      const response = await axios.put(
        `${url}/user/:id`,  
        { username, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,  
          },
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        setEditingField(null); 
      }
    } catch (error) {
      console.error(error);
      setError('Failed to update account');
    }
  };

  return (
    <div className='ml-[3rem] mt-[2rem] mr-[3rem]'> 
      <h2 className='font-bold text-[24px] text-[#111827]'>Account</h2>
      <div className='flex items-center gap-4'>
        <div className='flex justify-center items-center w-12 h-12 bg-[#111827] rounded-full my-10'>
          <p className='text-white font-semibold'>{username && username.charAt(0).toUpperCase()}</p>
        </div>
        <div>
          <p className='font-bold'>{username}</p>
          <p className='text-gray-500'>{email}</p>
        </div>
      </div>

   
      <div className='flex items-center gap-[10.5rem] md:gap-[26rem]'>
        <p className='font-semibold'>Name</p>
        <div className='flex items-center w-[12rem] h-[2rem] rounded-md border border-gray-300'>
          {editingField === 'username' ? (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={handleUpdate}  
              className='pl-2 w-full'
            />
          ) : (
            <p className='text-gray-600 pl-2' onClick={() => setEditingField('username')}>{username}</p>
          )}
        </div>
      </div>

      <hr className='mt-[1rem]' />

      {/* Editable Email */}
      <div className='flex items-center gap-[9rem] md:gap-[26rem] mt-4'>
        <p className='font-semibold'>Email</p>
        <div className='flex items-center w-[12rem] h-[2rem] rounded-md border border-gray-300'>
          {editingField === 'email' ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleUpdate}
              className='pl-2 w-full'
            />
          ) : (
            <p className='text-gray-600 pl-2' onClick={() => setEditingField('email')}>{email}</p>
          )}
        </div>
      </div>

      <hr className='mt-[1rem]' />

      {success && <p className="text-green-500 mt-4">Account updated successfully!</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Account;
