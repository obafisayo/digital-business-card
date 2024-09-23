import React, { useState } from 'react'
import { IoImageOutline } from 'react-icons/io5';

const Lazyloader = ({ publicId, alt, className, style }) => {
    const cloudinaryBase = "https://res.cloudinary.com/dafdhu3h5/image/upload";
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="relative w-full h-full">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <FallbackPulsediv />
                </div>
            )}
            <img
                src={`${cloudinaryBase}/${publicId}?w=500&h=500&fit=crop&auto=webp`}
                alt={alt}
                className={className}
                style={style}
                loading="lazy" // Native lazy loading
                onLoad={handleLoad}
                onError={() => setIsLoading(false)} // Hide loading on error
            />
        </div>
    );
};

// Fallback Pulsediv
const FallbackPulsediv = () => {
    return (
        <div className="animate-pulse bg-blue-300 rounded-md w-full h-full flex justify-center items-center">
            <IoImageOutline className='text-blue-500 w-1/2 h-1/2 mx-auto' />
        </div>
    );
}


export default Lazyloader;
