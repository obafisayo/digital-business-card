import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import CompanyInfo from '../companyInfo/CompanyInfo';
import QRcodeComponent from '../../../../../components/qrcode/QRcodeComponent';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';

const FrontFace = ({ person }) => {
    const contactsArr = [
        {
            value: person.contact.telephone,
            icon: <FiPhone className="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" />
        },
        {
            value: person.contact.email,
            icon: <IoMailOutline className="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" />
        },
        {
            value: person.contact.address,
            icon: <IoLocationOutline className="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" />
        },
    ];

    return (
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
                        {contactsArr.map((item, index) => {
                            return item.value ? (
                                <li className="flex gap-2" key={index}>
                                    {item.icon}
                                    <p className="text-sm text-black break-normal truncate w-[90%]">{item.value}</p>
                                </li>
                            ) : null; // Return null if item.value does not exist
                        })}
                    </ul>
                </div>
                <div className="h-full w-1/2 flex flex-col justify-between">
                    <CompanyInfo person={person} front />
                    <div className='flex items-center justify-end mr-10'>
                        <QRcodeComponent link={person.link} size={50} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FrontFace;
