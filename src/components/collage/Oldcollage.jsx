import React, { useState, useEffect, useMemo } from 'react';
import { ReactPhotoCollage } from "react-photo-collage";
import Loading from '../loadingDiv/Loading';
import { useBasicContext } from '../../contexts/BasicContext';

const Collage = ({ images }) => {
    const cloudinaryBase = "https://res.cloudinary.com/dafdhu3h5/image/upload";
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const { isMobile } = useBasicContext()
    
    const imagesPerPage = 5;

    const currentImages = useMemo(() => {
        const indexOfLastImage = currentPage * imagesPerPage;
        const indexOfFirstImage = indexOfLastImage - imagesPerPage;
        return images.slice(indexOfFirstImage, indexOfLastImage);
    }, [images, currentPage]);

    const getLayout = (numImages, isMobile) => {
        if (numImages === 0) return [0];
        if (numImages === 1) return [1];
        if (numImages === 2) return [2];
        if (numImages === 3) return [2, 1];
        if (numImages === 4) return [2, 2];
        return isMobile ? [2, 2, 1] : [3, 2];
    };

    const layout = getLayout(currentImages.length, isMobile);
    const height = currentImages.length <= 2 ? ['250px'] : isMobile ? ['250px', '250px', '170px'] : ['300px', '250px'];

    const setting = {
        width: '100%',
        layout: layout,
        height: height,
        photos: currentImages.map(image => ({
            source: `${cloudinaryBase}/${image}?w=500&h=500&fit=crop&auto=webp`
        })),
        showNumOfRemainingPhotos: true
    };

    // Create a unique key for the ReactPhotoCollage component
    const collageKey = `${currentPage}-${JSON.stringify(setting.layout)}-${JSON.stringify(setting.height)}`;

    useEffect(() => {
        setLoading(true);
        const imageElements = currentImages.map(image => new Image());
        let loadedImages = 0;

        const checkAllImagesLoaded = () => {
            loadedImages++;
            if (loadedImages === imageElements.length) {
                setLoading(false);
            }
        };

        imageElements.forEach((img, index) => {
            img.src = `${cloudinaryBase}/${currentImages[index]}?w=500&h=500&fit=crop&auto=webp`;
            img.onload = checkAllImagesLoaded;
            img.onerror = checkAllImagesLoaded;
        });
    }, [currentImages]);

    const totalPages = Math.ceil(images.length / imagesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className=''>
            {loading ? <Loading /> : <ReactPhotoCollage key={collageKey} {...setting} />}
            {!loading && (
                <>
                    <div className="flex justify-between mt-4">
                        <button 
                            onClick={handlePrevPage} 
                            disabled={currentPage === 1} 
                            className="bg-blue-500 text-white rounded px-4 py-2"
                        >
                            Previous
                        </button>
                        <button 
                            onClick={handleNextPage} 
                            disabled={currentPage === totalPages} 
                            className="bg-blue-500 text-white rounded px-4 py-2"
                        >
                            Next
                        </button>
                    </div>
                    <div className="mt-2 max-md:mb-2 text-center">
                        Page {currentPage} of {totalPages}
                    </div>
                </>
            )}
        </div>
    );
}

export default Collage;
