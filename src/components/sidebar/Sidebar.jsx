import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ACCOUNT, CARDS, CONTACTS, PEOPLE } from '../../routes/RoutesConstant';
import { FaPeopleRoof, FaRegIdCard } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { IoBusinessSharp } from "react-icons/io5";
import { BsFillDoorClosedFill, BsFillDoorOpenFill } from 'react-icons/bs';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useUserContext } from '../../contexts/UserContext';
import { useBasicContext } from '../../contexts/BasicContext';
import DropdownButton from '../shared/dropdownButton/DropdownButton';

const Sidebar = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState("Cards");
    const [isOpen, setIsOpen] = useState(false);
    const { image, username } = useUserContext();
    const { setIsEditing } = useBasicContext();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        {
            id: 1,
            to: CARDS,
            title: "Cards",
            icon: <FaRegIdCard />
        },
        {
            id: 2,
            to: PEOPLE,
            title: "People",
            icon: <FaPeopleRoof />
        },
        {
            id: 3,
            to: CONTACTS,
            title: "Contacts",
            icon: <BiSolidContact />
        },
        {
            id: 4,
            to: ACCOUNT,
            title: "Account",
            icon: <VscAccount />
        },
    ];

    const handleTabClick = (title) => {
        setSelectedTab(title);
        if (title !== "Cards") {
            setIsEditing(false);
        }
    };

    return (
        <section className="flex overflow-hidden h-screen">
            {/* Sidebar */}
            <div className={`z-50 max-sm:absolute max-sm:bottom-0 sm:h-screen bg-gray-800 max-sm:w-full text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
                <div className="flex relative max-sm:hidden">
                    <Link to={CARDS} onClick={() => handleTabClick("Cards")} className={`w-full flex items-center justify-start px-4 py-2 mt-4`}>
                        <div className='flex items-center justify-center gap-2'>
                            <span className='flex justify-center items-center'>{<IoBusinessSharp size={24} className='text-primary' />}</span>
                            <span className={`text-lg font-bold text-primary transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0 delay-100'}`}>BizIn</span>
                        </div>
                    </Link>
                    <button onClick={toggleSidebar} className="sm:absolute top-4 bottom-0 -right-10">
                        {isOpen ? <BsFillDoorOpenFill size={18}/> : <BsFillDoorClosedFill size={18}/> }
                    </button>
                </div>
                <div className="sm:mt-6 flex sm:flex-col gap-4 items-center sm:items-start justify-center">
                    {links.map((link) => (
                        <Link key={link.id} to={link.to} onClick={() => handleTabClick(link.title)} className={`w-full flex items-center justify-center sm:justify-start px-4 py-4 sm:py-2 hover:bg-gray-700`}>
                            <div className='flex items-center justify-center gap-4'>
                                <span className='flex justify-center items-center'>{link.icon}</span>
                                <span className={`transition-all duration-300 max-sm:hidden ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0 delay-100'}`}>{link.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Navbar */}
            <div className="flex flex-col w-full max-sm:h-full">
                <div className="w-full h-fit bg-gray-900 text-white p-4 pl-16">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg font-bold">{selectedTab}</h1>
                        {selectedTab === "Cards" ? <DropdownButton /> 
                            :
                        <Link to={ACCOUNT} onClick={() => handleTabClick("Account")} >
                            <div className="flex justify-center items-center sm:gap-4">
                                <div className="text-sm max-sm:hidden">
                                    <h1 className='font-bold text-base'>{username}</h1>
                                    <p className='text-gray-300 font-light'>LG, Nigeria</p>
                                </div>
                                <Avatar
                                    size="large"
                                    icon={<UserOutlined />}
                                    src={image}
                                />
                            </div>
                        </Link>
                        }
                    </div>
                </div>
                <div className="w-full h-full overflow-y-auto bg-brandSky hero-image">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
