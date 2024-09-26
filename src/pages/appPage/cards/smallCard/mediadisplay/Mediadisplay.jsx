import React, { useRef } from 'react'
import RoundedButton from '../../../../../components/secondaryButtons/RoundedButton';
import Lazyloader from '../../../../../components/lazyloader/Lazyloader';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Mediadisplay = ({ person, selectedImageIndex, setSelectedImageIndex, handler = () => {} }) => {

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };


    const handleNext = () => {
        if (selectedImageIndex < person.images.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const containerRef = useRef(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 250;
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 250;
        }
    };

  return (
    <div className={`${selectedImageIndex !== null ? "absolute top-0 bottom-0 left-0 right-0 w-full h-full m-auto bg-black/70" : ""}`}
        style={selectedImageIndex !== null ? { width: '90%', height: '90%' } : {}}>
        {selectedImageIndex !== null ? (
            <motion.div 
                className="relative w-full h-full flex items-center justify-center z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
            >
                <RoundedButton 
                    classname={"left-0 z-50"} 
                    handler={handler}
                    icon={<IoIosCloseCircleOutline size={28} />} 
                    top={"top-5"}
                    hovertext={"hover:text-red-600"}
                />
                <Lazyloader 
                    publicId={person.images[selectedImageIndex]} 
                    alt="Selected" 
                    className='w-full h-full object-contain rounded' 
                />
                <RoundedButton 
                    classname={"bg-gray-800 hover:bg-white left-2"} 
                    handler={handlePrev} 
                    disabled={selectedImageIndex === 0}
                    icon={<FaCaretLeft />}
                />
                <RoundedButton 
                    classname={"bg-gray-800 hover:bg-white right-2"} 
                    handler={handleNext} 
                    disabled={selectedImageIndex === person.images.length - 1}
                    icon={<FaCaretRight />}
                />
            </motion.div>
        ) : (
            <div className='w-full'>
                <h1 className='p-2 font-medium'>What we Offer</h1>
                <div ref={containerRef} className='scroll-smooth w-full overflow-x-auto remove-scroll-bar flex space-x-2'>
                    {person.images.map((item, index) => (
                        <div 
                            key={index} 
                            className='flex-shrink-0 w-[82px] h-16 cursor-pointer' 
                            onClick={() => handleImageClick(index)}
                        >
                            <Lazyloader 
                                publicId={item} 
                                alt={`img-${index}`} 
                                className='w-full h-full object-cover rounded' 
                            />
                        </div>
                    ))}
                    <RoundedButton 
                        classname={"bg-transparent hover:bg-white/50 -left-2"} 
                        handler={handleScrollLeft} 
                        disabled={selectedImageIndex === 0}
                        icon={<FaCaretLeft />} 
                        top={"top-[59%]"}
                    />
                    <RoundedButton 
                        classname={"bg-transparent hover:bg-white/50 right-0"} 
                        handler={handleScrollRight} 
                        disabled={selectedImageIndex === person.images.length - 1}
                        icon={<FaCaretRight />} 
                        top={"top-[59%]"}
                    />
                </div>
            </div>
        )}
    </div>
  )
}

export default Mediadisplay;
