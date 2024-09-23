import React, { useState } from 'react'
import { motion } from 'framer-motion';
import RoundedButton from '../../../../../components/secondaryButtons/RoundedButton';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import QRcodeComponent from '../../../../../components/qrcode/QRcodeComponent';

const Share = ({ link, handler = () => {} }) => {
    const [copyText, setCopyText] = useState("Copy Link");

    const handleCopyLink = () => {
        navigator.clipboard.writeText(link);
        setCopyText("Copied!");

        setTimeout(() => {
            setCopyText("Copy Link");
        }, 5000);
    };
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto">
        <motion.div 
            className="relative w-full h-full flex items-center justify-center z-40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            <RoundedButton classname={"left-4"} 
                handler={handler}
                icon={<IoIosCloseCircleOutline size={28} />} top={"top-8"}
                hovertext={"hover:text-red-600"}
            />
            <div className="h-[90%] w-[90%] bg-black/90 rounded-md flex items-center justify-center gap-10">
                <button 
                    onClick={handleCopyLink} 
                    className='pb-1 hover:bg-white hover:text-black transition-colors duration-300 px-2 border rounded-full w-fit h-fit'>
                    {copyText}
                </button>
                <QRcodeComponent link={link} size={130} text />
            </div>
        </motion.div> 
    </div>
  )
}

export default Share;
