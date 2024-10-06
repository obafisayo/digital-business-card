import React, { useState } from 'react';
import CardNav from '../../../../components/cardNav/CardNav';
import Information from './information/Information';
import Display from './display/Display';
import Fields from './fields/Fields';

const EditCard = ({ person, setPerson, setIsEditing }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='flex flex-col w-full bg-brandSky rounded rounded-t-[46px] z-10'>
            <div className="sticky flex justify-around items-center max-sm:flex-col max-sm:gap-2 w-full top-0 p-4 bg-brandSky z-20 md:rounded rounded-t-[46px]">
                <div className='max-md:order-2'>
                    <CardNav 
                        arr={["Display", "Information", "Fields"]} 
                        handler={handleTabClick}
                    />
                </div>
                <div className="flex justify-end max-sm:order-1 max-sm:w-full max-sm:mr-10">
                    <button 
                        className="bg-blue-500 text-white rounded p-2 mr-2"
                        onClick={() => setIsEditing(false)}
                    >
                        Save
                    </button>
                    <button 
                        className="bg-red-500 text-white rounded p-2"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 relative max-sm:pb-14 p-8 pt-0">
                {activeTab === 0 && <Display person={person} setPerson={setPerson} />}
                {activeTab === 1 && <Information person={person} setPerson={setPerson} />}
                {activeTab === 2 && <Fields person={person} setPerson={setPerson} />}
            </div>
        </div>
    );
}

export default EditCard;
