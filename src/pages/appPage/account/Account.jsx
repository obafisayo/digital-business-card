// Account.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { SIGNIN, URL } from '../../../routes/RoutesConstant';
import UserProfileImage from './profileImg/UserProfileImage';
import UserInfo from './userInfo/UserInfo';
import ActionButtons from './actionbuttons/ActionButtons';
import ConfirmationModal from './confirmationModal/ConfirmationModal';

const Account = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [originalUsername, setOriginalUsername] = useState('');
  const [originalEmail, setOriginalEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState('');
  const navigate = useNavigate();
  
  const url = URL;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const response = await axios.get(`${url}/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          const { username, email, image } = response.data;
          setUsername(username);
          setEmail(email);
          setOriginalUsername(username);
          setOriginalEmail(email);
          setImage(image);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
        setError('Failed to fetch user data');
      }
    };
    fetchUserData();
  }, [url]);

  const handleChange = (field, value) => {
    if (field === 'username') {
      setUsername(value);
    } else if (field === 'email') {
      setEmail(value);
    }
    setIsChanged(value !== (field === 'username' ? originalUsername : originalEmail));
  };

  const handleUpdate = async () => {
    setError(null);
    setSuccess(false);
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const updatedData = {
        username,
        email,
        image,
      };

      const response = await axios.put(`${url}/user/${userId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuccess(true);
        setOriginalUsername(username);
        setOriginalEmail(email);
        setIsChanged(false);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to update account');
    }
  };

  const handleCancel = () => {
    setUsername(originalUsername);
    setEmail(originalEmail);
    setIsChanged(false);
    setImage(null);
  };

  const handleLogout = () => {
    setActionType('logout');
    setShowModal(true);
  };

  const handleDeleteAccount = () => {
    setActionType('delete');
    setShowModal(true);
  };

  const confirmAction = async () => {
    const token = localStorage.getItem('token');
    if (actionType === 'logout') {
      localStorage.removeItem('token');
      navigate(SIGNIN);
    } else if (actionType === 'delete') {
      if (!token) return;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      try {
        const response = await axios.delete(`${url}/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate(SIGNIN);
        }
      } catch (error) {
        console.error(error);
        setError('Failed to delete account');
      }
    }
    setShowModal(false);
  };

  return (
    <div className='ml-[3rem] mt-[2rem] mr-[3rem]'>
      <UserProfileImage 
        image={image} 
        username={username} 
        email={email} 
        setImage={setImage} 
        setIsChanged={setIsChanged}
      />
      <UserInfo 
        username={username} 
        email={email} 
        handleChange={handleChange} 
      />
      {success && <p className="text-green-500 mt-4">Account updated successfully!</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {isChanged && (
        <ActionButtons 
          handleUpdate={handleUpdate} 
          handleCancel={handleCancel} 
        />
      )}
      <div className="flex space-x-0 justify-between">
        <button onClick={handleLogout} className='mt-4 bg-red-500 text-white py-2 px-4 rounded'>
          Logout
        </button>
        <button onClick={handleDeleteAccount} className='mt-4 bg-red-500 text-white py-2 px-4 rounded'>
          Delete Account
        </button>
      </div>
      <ConfirmationModal 
        showModal={showModal} 
        actionType={actionType} 
        confirmAction={confirmAction} 
        setShowModal={setShowModal} 
      />
    </div>
  );
};

export default Account;
