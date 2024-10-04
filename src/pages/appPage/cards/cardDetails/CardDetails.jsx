import React, { useState } from 'react';
import Collage from '../../../../components/collage/Collage';
import UserProfileImage from '../../account/profileImg/UserProfileImage';
import CardNav from '../../../../components/cardNav/CardNav';

const CardDetails = ({ person }) => {
    const [filteredImages, setFilteredImages] = useState(person.images);

    const handleTabClick = (index) => {
        // Filter images based on the clicked category
        if (index === 0) {
            // All
            setFilteredImages(person.images);
        } else if (index === 1) {
            // Photos
            setFilteredImages(person.images.filter(img => img.type === 'photo')); // Assuming 'type' is a property indicating photo
        } else if (index === 2) {
            // Videos
            setFilteredImages(person.images.filter(img => img.type === 'video')); // Assuming 'type' is a property indicating video
        }
    };

    return (
        <div className="flex flex-col gap-4 relative w-full h-fit max-sm:pb-10 rounded-t-[46px] bg-brandSky">
            <div className="absolute -top-20 left-0 right-0">
                <UserProfileImage big />
            </div>
            <div className="flex justify-between items-center my-3 md:mt-28 md:mb-1">
                <div className="w-1/2 flex flex-col items-center justify-center pr-14">
                    <h1 className="text-2xl font-bold">1k</h1>
                    <p>Followers</p>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center pl-14">
                    <h1 className="text-2xl font-bold">342</h1>
                    <p>Following</p>
                </div>
            </div>
            <div className="w-full mt-10 flex justify-center items-center">
                <p className="text-sm text-center w-9/12 text-textPrimary">{person.bio}</p>
            </div>
            <div className="flex justify-center items-center gap-6">
                <button className="bg-primary text-white rounded-full px-9 py-3 shadow-lg hover:shadow-inner">
                    Follow
                </button>
                <button className="bg-white rounded-full px-9 py-3 shadow-lg hover:shadow-inner">
                    Message
                </button>
            </div>
            <div className="flex items-center justify-center">
                <CardNav 
                    arr={["All", "Photos", "Videos"]}
                    handler={(index) => handleTabClick(index)} // Pass the handler to filter images
                />
            </div>
            <div className="rounded-t-[56px] border-8 border-b-0 border-white overflow-hidden">
                <Collage images={filteredImages} />
            </div> 
        </div>
    )
}

export default CardDetails;
