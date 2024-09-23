import React from 'react'
import { Link } from "react-router-dom"
import { BsGlobe } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const CardLinks = ({socials}) => {
  return (
    <div className='flex gap-1 z-10'>
        {socials.website && <Link to={socials.website} target="_blank" rel="noopener noreferrer">
            <div className='scale-90 rounded-full p-[6px] bg-black hover:bg-white hover:text-black'>
                <BsGlobe size={20} />
            </div>
        </Link>}
        {socials.facebook && <Link to={socials.facebook} target="_blank" rel="noopener noreferrer">
            <div className='scale-90 rounded-full p-[6px] bg-blue-500 hover:bg-white hover:text-blue-500'>
                <FaFacebookF size={20} />
            </div>
        </Link>}
        {socials.linkedin && <Link to={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <div className='scale-90 rounded-full p-[6px] bg-sky-900 hover:bg-white hover:text-sky-900'>
                <FaLinkedinIn size={20} />
            </div>
        </Link>}
        {socials.twitter && <Link to={socials.twitter} target="_blank" rel="noopener noreferrer">
            <div className='scale-90 rounded-full p-[6px] bg-black hover:bg-white hover:text-black'>
                <FaXTwitter size={20} />
            </div>
        </Link>}
    </div>
    
  )
}

export default CardLinks;
