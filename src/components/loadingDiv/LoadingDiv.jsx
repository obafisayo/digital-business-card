import React from 'react'
import { IoBusinessSharp } from 'react-icons/io5';

const LoadingDiv = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='animate-pulse'>
            <span className='flex justify-center items-center'>{<IoBusinessSharp size={44} className='text-sky-500' />}</span>
        </div>
    </div>
  )
}

export default LoadingDiv;
