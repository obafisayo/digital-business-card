import React, { useState } from 'react';
import { FcEditImage } from "react-icons/fc";
import LoadingDiv from '../../../../components/loadingDiv/LoadingDiv';

const UserProfileImage = ({ image, username, email, setImage, setIsChanged }) => {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = () => {
    if (!window.cloudinary) {
      console.error("Cloudinary is not loaded");
      return;
    }

    const cloudName = 'dafdhu3h5';
    const uploadPreset = 'bizin_preset';

    setLoading(true); // Set loading to true when upload starts

    window.cloudinary.openUploadWidget(
      {
        cloudName,
        uploadPreset,
        sources: ['local', 'url'],
        tags: ['bizin_asset'],
        clientAllowedFormats: ['image'],
        resourceType: 'image',
      },
      (error, result) => {
        setLoading(false); // Reset loading when upload ends

        if (error) {
          console.error("Error during upload:", error);
          return;
        }
        if (result.event === 'success') {
          const secureUrl = result.info.secure_url;
          setImage(secureUrl);
          setIsChanged(true);
        }
      }
    );
  };

  return (
    <div className='flex items-center gap-4'>
      <div 
        className='flex justify-center items-center w-12 h-12 bg-[#111827] rounded-full my-10 relative'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleImageUpload}
      >
        {image ? (
          <img src={image} alt="Profile" className="w-full h-full rounded-full object-cover" />
        ) : (
          <>
            <p className={`text-white text-2xl font-semibold ${hovered ? "hidden" : "flex"}`}>
              {username.charAt(0).toUpperCase()}
            </p>
            <FcEditImage size={28} className={`${hovered ? "flex" : "hidden"}`} />
          </>
        )}
      </div>
      <div>
        <p className='font-bold text-xl'>{username}</p>
        <p className='text-sm'>{email}</p>
      </div>
      {loading && (
        <LoadingDiv />
      )}
    </div>
  );
};

export default UserProfileImage;
