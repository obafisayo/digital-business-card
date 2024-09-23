import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxCardStackPlus } from 'react-icons/rx';
import CardLinks from '../links/CardLinks';
import CompanyInfo from '../companyInfo/CompanyInfo';
import WhatsappButton from '../../../../../components/secondaryButtons/WhatsappButton';
import { PiShareFat } from "react-icons/pi";
import Share from '../share/Share';
import Mediadisplay from '../mediadisplay/Mediadisplay';

const BackFace = ({ person }) => {
    const [shareClicked, setShareClicked] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleCancel = () => {
        setSelectedImageIndex(null);
        setShareClicked(false);
    };

    return (
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
                    <CompanyInfo person={person} />
                    <div className='flex'>
                        <div className='scale-90 rounded-full h-fit p-[6px] bg-transparent hover:bg-white hover:text-black'>
                            <RxCardStackPlus size={20} />
                        </div>
                        <div className='scale-90 rounded-full h-fit p-2 bg-transparent hover:bg-white hover:text-black'
                            onClick={() => setShareClicked(true)}>
                            <PiShareFat size={18} />
                        </div>
                        {shareClicked && (
                            <Share link={person.link} handler={handleCancel} />
                        )}
                    </div>
                </div>
                <div>
                    <Mediadisplay person={person} handler={handleCancel} 
                        selectedImageIndex={selectedImageIndex} setSelectedImageIndex={setSelectedImageIndex} 
                    />
                    <div className='flex justify-between items-end w-full mt-3'>
                        <CardLinks socials={person.socials} />
                        <WhatsappButton link={person.socials.whatsapp} title={"Send Message"} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BackFace;
