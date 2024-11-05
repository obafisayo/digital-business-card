import React from 'react';
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = ({ number, title, message }) => {
  const websiteLink = "https://digitbiz.netlify.app/";
  
  // Combine the message and website link, and encode the full message
  const fullMessage = `${websiteLink} ${message}`;
  const encodedMessage = encodeURIComponent(fullMessage);
  const link = `https://wa.me/${number}?text=${encodedMessage}`;

  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <button className="hover:border-green-500 flex gap-1 items-center w-fit z-30
          text-white font-bold rounded-full group hover:text-green-500 transition-colors duration-300">
        <p className='font-medium text-sm'>{title}</p>
        <div className='scale-90 rounded-full p-[6px] bg-green-500 group-hover:bg-white'>
          <FaWhatsapp size={20} />
        </div>
      </button>
    </Link>
  );
}

export default WhatsappButton;
