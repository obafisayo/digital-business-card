import React, { useState } from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import UserProfileImage from './profileImg/UserProfileImage';
import UserInfo from './userInfo/UserInfo';
import ActionButtons from './actionbuttons/ActionButtons';
import ConfirmationModal from './confirmationModal/ConfirmationModal';
import LoadingDiv from '../../../components/loadingDiv/LoadingDiv';

const Account = () => {
  const {
    originalEmail,
    originalUsername,
    setUsername,
    setEmail,
    username,
    email,
    loading,
    error,
    success,
    isChanged,
    setIsChanged,
    handleUpdate,
    confirmAction,
  } = useUserContext();

  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState('');

  const handleChange = (field, value) => {
    if (field === 'username') {
      setUsername(value);
    } else if (field === 'email') {
      setEmail(value);
    }
    setIsChanged(value !== (field === 'username' ? originalUsername : originalEmail));
  };

  const handleLogout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token available during logout');
      return; 
    }
    setActionType('logout');
    setShowModal(true);
  };

  const handleDeleteAccount = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token available during account deletion');
      return; 
    }
    setActionType('delete');
    setShowModal(true);
  };

  const handleCancel = () => {
    setUsername(originalUsername);
    setEmail(originalEmail);
    setIsChanged(false);
  };

  return (
    <section className="container w-full h-full pt-10">
      <div className='container w-full h-full bg-brandSky rounded-t-[36px]'>
        <UserProfileImage />
        <UserInfo 
          username={username} 
          email={email} 
          handleChange={handleChange} 
        />
        {success && <p className="text-green-500 mt-4">Account updated successfully!</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {loading && <LoadingDiv />}
        {isChanged && (
          <ActionButtons 
            handleUpdate={handleUpdate} 
            handleCancel={handleCancel} 
          />
        )}
        <div className="flex space-x-0 justify-between">
          <button onClick={handleLogout} className='mt-4 bg-primary text-white py-2 px-4 rounded'>
            Logout
          </button>
          <button onClick={handleDeleteAccount} className='mt-4 bg-red-500 text-white py-2 px-4 rounded'>
            Delete Account
          </button>
        </div>
        <ConfirmationModal 
          showModal={showModal} 
          actionType={actionType} 
          confirmAction={() => confirmAction(actionType)} 
          setShowModal={setShowModal} 
        />
      </div>
    </section>
  );
};

export default Account;
