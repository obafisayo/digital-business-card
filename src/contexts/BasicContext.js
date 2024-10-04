import React, { createContext, useContext, useEffect, useState } from 'react';

// Create Context
const BasicContext = createContext();

// Create Provider Component
export const BasicProvider = ({ children }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [changed, setIsChanged] = useState(false);
    const [imageloading, setLoading] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
        setIsTablet(window.innerWidth < 1024);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImageUpload = (callback) => {
        if (!window.cloudinary) {
            console.error("Cloudinary is not loaded");
            return;
        }

        const cloudName = 'dafdhu3h5';
        const uploadPreset = 'bizin_preset';

        setLoading(true); // Start imageloading

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
                setLoading(false); // Stop imageloading

                if (error) {
                    console.error("Error during upload:", error);
                    return;
                }
                if (result.event === 'success') {
                    const secureUrl = result.info.secure_url;
                    setIsChanged(true);
                    callback(secureUrl); // Pass the URL to the callback
                }
            }
        );
    };

    const values = {
        isEditing,
        setIsEditing,
        isMobile,
        isTablet,
        changed,
        imageloading,
        handleImageUpload,
    };

    return (
        <BasicContext.Provider value={values}>
            {children}
        </BasicContext.Provider>
    );
};

// Custom hook to use the BasicContext
export const useBasicContext = () => {
    return useContext(BasicContext);
};
