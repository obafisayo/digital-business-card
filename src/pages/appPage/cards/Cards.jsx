import React, { useState, useEffect } from 'react';
import EditCard from './editCard/EditCard';
import axios from 'axios';
import { URL } from '../../../routes/RoutesConstant';
import MultiStepForm from '../../../components/MultiStepForm/MultiStepForm';
import LoadingDiv from '../../../components/loadingDiv/LoadingDiv';
import SmallCard from './smallCard/SmallCard';
import { initialPerson } from '../../../config/userConfig';
import { useBasicContext } from '../../../contexts/BasicContext';
import CardDetails from './cardDetails/CardDetails';

const Cards = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { isEditing, setIsEditing, isTablet } = useBasicContext();

    const openPopup = () => setIsPopupVisible(true);
    const closePopup = () => setIsPopupVisible(false);

    const [person, setPerson] = useState(initialPerson);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const url = URL;

    useEffect(() => {
        const fetchCardTemplate = async () => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${url}/card/template/${person.templateId || 1}`, person, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCards([response.data]);
            } catch (error) {
                console.error('Error fetching cards:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCardTemplate();
    }, [person, url]);

    

    return (
        <div className={`relative flex ${isEditing? "sm:pt-10" : "sm:pt-20"} max-sm:pt-10 max-sm:pb-0 items-center w-full h-fit`}>
            <div className="md:container h-full flex max-lg:flex-col md:gap-8 max-lg:gap-14 max-lg:justify-center justify-evenly w-full max-lg:items-center items-start">
                <div className='sticky top-0 md:top-10'>
                    {isEditing ? (
                        <SmallCard person={person} html={cards[0]} removeFlip={!isTablet} />
                    ) : (
                        isLoading ? (
                            <LoadingDiv />
                        ) : (
                            <SmallCard person={person} html={cards[0]} />
                        )
                    )}
                </div>
                {isEditing ?
                    <EditCard 
                        setPerson={setPerson}
                        person={person}
                        setIsEditing={setIsEditing}
                    />
                    : 
                    <CardDetails person={person} />
                }
            </div>
            <div>
                <button
                    className='fixed right-[16rem] top-4 rounded-lg border px-4 py-2 bg-gray-500 text-white cursor-pointer hover:bg-black transition-colors duration-300'
                    onClick={openPopup}
                >
                    Complete Information
                </button>
            </div>
            <MultiStepForm isVisible={isPopupVisible} closePopup={closePopup} />
        </div>
    );
};

export default Cards;
