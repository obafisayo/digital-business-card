import React from 'react';

const ConfirmationModal = ({ showModal, actionType, confirmAction, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded shadow-lg'>
        <h2 className='text-lg font-bold mb-4'>Confirm Action</h2>
        <p className='mb-4'>Are you sure you want to {actionType === 'logout' ? 'log out' : 'delete your account'}?</p>
        <div className='flex justify-end'>
          <button onClick={() => setShowModal(false)} className='bg-gray-300 text-black py-2 px-4 rounded mr-2'>
            Cancel
          </button>
          <button onClick={confirmAction} className='bg-red-500 text-white py-2 px-4 rounded'>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
