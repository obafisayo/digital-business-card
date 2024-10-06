import React, { useEffect, useState } from 'react';
import { FcEditImage } from "react-icons/fc";
import LoadingDiv from '../../../../components/loadingDiv/LoadingDiv';
import { useBasicContext } from '../../../../contexts/BasicContext';
import { useUserContext } from '../../../../contexts/UserContext';

const UserProfileImage = ({ big }) => {
  const { imageloading, handleImageUpload } = useBasicContext();
  const { isChanged, image, setIsChanged, username, email, setImage, loading, handleUpdate } = useUserContext();
  const [hovered, setHovered] = useState(false);

  const handleUpload = async () => {
    handleImageUpload(async (secure_url) => {
      if (secure_url) {
        setImage(secure_url);
        setIsChanged(true);
      }
    });
  };

  useEffect(() => {
    const updateProfileImage = async () => {
      if (big && isChanged) {
        await handleUpdate();
        setIsChanged(false);
      }
    };

    updateProfileImage();
  }, [isChanged, big, handleUpdate, setIsChanged]);

  return (
    <div className={`flex ${big ? "flex-col" : ""} gap-4 items-center`}>
      <div 
        className={`flex justify-center items-center ${big ? "max-lg:w-40 max-lg:h-40 w-64 h-64 shadow-lg border-8 border-white" : "w-12 h-12 my-10"} bg-[#111827] rounded-full relative`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {image && !hovered ? (
          <img src={image} alt="Profile" className="w-full h-full rounded-full object-cover" />
        ) : (
          <>
            <p className={`text-white text-2xl font-semibold ${hovered ? "hidden" : "flex"}`}>
              {username.charAt(0).toUpperCase()}
            </p>
            <FcEditImage onClick={handleUpload} size={28} className={`${hovered ? "flex z-50" : "hidden"}`} />
          </>
        )}
      </div>
      <div className={`${big ? "flex" : ""}`}>
        <p className='font-bold text-xl'>{`${big ? "@" : ""}${username}`}</p>
        {!big && <p className='text-sm'>{email}</p>}
      </div>
      {imageloading && (
        <LoadingDiv />
      )}
      {loading && (
        <LoadingDiv />
      )}
    </div>
  );
};

export default UserProfileImage;
