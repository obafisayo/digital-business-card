import React from 'react'
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import CompanyInfo from '../companyInfo/CompanyInfo';
import QRcodeComponent from '../../../../../components/qrcode/QRcodeComponent';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';

const FrontFace = ({person}) => {
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
                    {person.contact.telephone &&
                        <li className="flex gap-2">
                            <FiPhone className="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" />
                            <p className="text-sm text-black break-normal w-[90%]">{person.contact.telephone}</p>
                        </li>
                    }
                    {person.contact.email &&
                        <li className="flex gap-2">
                            <IoMailOutline className="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" />
                            <p className="text-sm text-black break-normal w-[90%]">{person.contact.email}</p>
                        </li>
                    }
                    {person.contact.address &&
                        <li className="flex gap-2">
                            <IoLocationOutline className="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" />
                            <p className="text-sm text-black break-normal w-[90%]">{person.contact.address}</p>
                        </li>
                    }
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
  )
}

export default FrontFace;
