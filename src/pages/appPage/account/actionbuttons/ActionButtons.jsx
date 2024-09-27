import React from 'react';

const ActionButtons = ({ handleUpdate, handleCancel }) => {
  return (
    <div className='mt-4'>
      <button onClick={handleUpdate} className='bg-blue-500 text-white py-2 px-4 rounded mr-2'>
        Save Changes
      </button>
      <button onClick={handleCancel} className='bg-gray-300 text-black py-2 px-4 rounded'>
        Cancel Changes
      </button>
    </div>
  );
};

export default ActionButtons;
