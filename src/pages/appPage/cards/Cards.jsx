import React, { useState, useEffect } from 'react';
import EditCard from './editCard/EditCard';
import MultiStepForm from '../../../components/MultiStepForm/MultiStepForm';
import LoadingDiv from '../../../components/loadingDiv/LoadingDiv';
import SmallCard from './smallCard/SmallCard';
import { useBasicContext } from '../../../contexts/BasicContext';
import CardDetails from './cardDetails/CardDetails';
import { useCardContext } from '../../../contexts/cardContext';
import { useTemplateContext } from '../../../contexts/TemplateContext';

const Cards = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { isEditing, setIsEditing, isTablet } = useBasicContext();
    const { cardData, cardLoading } = useCardContext();
    const { templates, isLoading } = useTemplateContext();

    const openPopup = () => setIsPopupVisible(true);
    const closePopup = () => setIsPopupVisible(false);

    const [person, setPerson] = useState({ socials: {} });
    const [card, setCard] = useState(null);

    useEffect(() => {
        if (cardData) {
            setPerson(prevPerson => ({
                ...prevPerson,
                ...cardData,
                socials: {
                    facebook: cardData.facebook_url || "",
                    instagram: cardData.instagram_url || "",
                    linkedin: cardData.linkedin_url || "",
                    website: cardData.website_url || "",
                    twitter: cardData.twitter_url || "",
                }
            }));
        }

        if (templates.length > 0 && cardData?.template_id) {
            setCard(templates[cardData.template_id - 1]);
        }
    }, [cardData, templates]);
    return (
        <>
            { (isLoading && cardLoading && !person) ? <LoadingDiv />
            :
            <div className={`relative flex ${isEditing ? "sm:pt-10" : "sm:pt-20"} max-sm:pt-10 max-sm:pb-0 items-center w-full h-fit`}>
                <div className="md:container h-full flex max-lg:flex-col md:gap-8 max-lg:gap-14 max-lg:justify-center justify-evenly w-full max-lg:items-center items-start">
                    <div className='sticky top-0 md:top-10'>
                        {isEditing ? (
                            <SmallCard person={person} html={card} removeFlip={!isTablet} />
                        ) : (
                            (isLoading && cardLoading) ? (
                                <LoadingDiv />
                            ) : (
                                <SmallCard person={person} html={card} />
                            )
                        )}
                    </div>
                    {isEditing ? (
                        <EditCard 
                            setPerson={setPerson}
                            person={person}
                            setIsEditing={setIsEditing}
                            setCard={setCard}
                            templates={templates}
                        />
                    ) : (
                        <CardDetails person={person} />
                    )}
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
        }</>
    );
};

export default Cards;
