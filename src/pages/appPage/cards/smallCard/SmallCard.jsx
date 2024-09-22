import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxCardStackPlus } from "react-icons/rx";
import { BsGlobe } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Qrcode from "../../../../assets/static/QrCode.png";
import Logo from "../../../../assets/static/Logo.png";

const SmallCard = ({ person, setIsFlipped, isFlipped }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCancel = () => {
    setSelectedImage(null);
  };

  return (
    <div className="h-56 w-96 [perspective:1000px]">
      <motion.div 
        className="relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front Face */}
        <motion.div 
          className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]"
          style={{
            backgroundImage: `url(${person.cardFront})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-full h-full px-4 py-6 flex">
            <div className="h-full w-1/2 flex flex-col justify-between">
              <div className="h-fit">
                <div className="text-lg flex gap-1 font-bold">
                  <p className="text-black">{person.firstname}</p>
                  <p className="text-brandGreen">{person.lastname}</p>
                </div>
                <p className="text-sm text-black">{person.title}</p>
              </div>
              <ul className="inline-flex flex-col gap-1">
                {person.contact.map((item, index) => (
                  <li className="flex gap-2" key={index}>
                    <FiPhone className="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" />
                    <p className="text-sm text-black break-normal w-[90%]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full w-1/2 flex flex-col justify-between">
              <div className='flex items-center justify-end gap-2'>
                <div className='h-7 w-7'>
                  <img className='w-full h-full' src={Logo} alt="Logo" />
                </div>
                <div className='text-white'>
                  <h3 className='font-semibold'>Company Name</h3>
                  <p className='text-xs font-light'>Tag Line Goes Here</p>
                </div>
              </div>
              <div className='flex items-center justify-end mr-10'>
                <div className='h-11 w-11'>
                  <img className='w-full h-full' src={Qrcode} alt="Qr-code" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back Face */}
        <motion.div 
          className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{
            backgroundImage: `url(${person.cardBack})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex min-h-full flex-col p-4 justify-between">
            <div className="flex justify-between">
              <div className='flex gap-1'>
                <div className='scale-90 rounded-full p-[6px] bg-black hover:bg-white hover:text-black'>
                  <BsGlobe size={20} />
                </div>
                <div className='scale-90 rounded-full p-[6px] bg-sky-900 hover:bg-white hover:text-sky-900'>
                  <FaLinkedinIn size={20} />
                </div>
                <div className='scale-90 rounded-full p-[6px] bg-blue-500 hover:bg-white hover:text-blue-500'>
                  <FaFacebookF size={20} />
                </div>
                <div className='scale-90 rounded-full p-[6px] bg-black hover:bg-white hover:text-black'>
                  <FaXTwitter size={20} />
                </div>
              </div>
              <div className='scale-90 rounded-full p-[6px] bg-transparent hover:bg-white hover:text-black'>
                <RxCardStackPlus size={20} />
              </div>
            </div>
            <div>
                <div className={`${selectedImage && "absolute top-0 bottom-0 left-0 right-0 m-auto"}`}>
                    {selectedImage ? (
                        <motion.div 
                        className="relative w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        >
                        <button 
                            onClick={handleCancel} 
                            className="absolute top-2 left-2 hover:text-red-600 text-white rounded-full"
                        >
                            <IoIosCloseCircleOutline size={28} />
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Selected" 
                            className='max-w-full max-h-full object-cover rounded' 
                            style={{ width: '100%', height: '100%' }}
                        />
                        </motion.div>
                    ) : (
                        <div className='overflow-x-auto remove-scroll-bar flex space-x-2'>
                        {person.images.map((item, index) => (
                            <div 
                            key={index} 
                            className='flex-shrink-0 w-20 h-16 cursor-pointer' 
                            onClick={() => handleImageClick(item)}
                            >
                            <img src={item} alt={`img-${index}`} className='w-full h-full object-cover rounded' />
                            </div>
                        ))}
                        </div>
                    )}
                </div>
                <div className='flex justify-end w-full'>
                    <button className="border hover:border-green-500 flex gap-1 items-center w-fit px-2 py-1 mt-2
                    text-white font-bold rounded-full group hover:text-green-500 transition-colors duration-300">
                    Send Message
                    <div className='scale-90 rounded-full p-[6px] bg-green-500 group-hover:bg-white'>
                        <FaWhatsapp size={20} />
                    </div>
                    </button>
                </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SmallCard;
