import React, { useRef, useState } from "react";
import RoundedButton from "../secondaryButtons/RoundedButton";
import Lazyloader from "../lazyloader/Lazyloader";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Mediadisplay = ({ arr, big, handler = () => {} }) => {
  const cloudinaryBase = "https://res.cloudinary.com/dafdhu3h5/image/upload";
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNext = () => {
    if (selectedImageIndex < arr.length - 1) {
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
  const handleCancel = () => {
    setSelectedImageIndex(null);
    handler();
  };
  return (
    <div
      className={`${
        selectedImageIndex !== null
          ? "absolute top-0 bottom-0 left-0 right-0 w-full h-full m-auto bg-black/70 transiton-all ease-in-out duration-300"
          : ""
      }`}
      // style={selectedImageIndex !== null ? { width: '90%', height: '90%' } : {}}>
      style={
        big
          ? { width: "100%", height: "100%", borderRadius: "46px 46px 0px 0px" }
          : selectedImageIndex !== null
          ? { width: "90%", height: "90%" }
          : {}
      }
    >
      {selectedImageIndex !== null ? (
        <div className="relative w-full h-full flex items-center justify-center z-20 transiton-all ease-in-out duration-300 scale-95">
          <RoundedButton
            classname={"left-0 z-50"}
            handler={handleCancel}
            icon={<IoIosCloseCircleOutline size={28} />}
            top={"top-5"}
            hovertext={"hover:text-red-600"}
          />
          <Lazyloader
            publicId={arr[selectedImageIndex]}
            alt="Selected"
            className="w-full h-full object-contain rounded"
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
            disabled={selectedImageIndex === arr.length - 1}
            icon={<FaCaretRight />}
          />
        </div>
      ) : !big ? (
        <div className="w-full">
          <h1 className="p-2 font-medium">What we Offer</h1>
          <div
            ref={containerRef}
            className="scroll-smooth w-full overflow-x-auto remove-scroll-bar flex space-x-2"
          >
            {arr.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[82px] h-16 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Lazyloader
                  publicId={item}
                  alt={`img-${index}`}
                  className="w-full h-full object-cover rounded"
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
              disabled={selectedImageIndex === arr.length - 1}
              icon={<FaCaretRight />}
              top={"top-[59%]"}
            />
          </div>
        </div>
      ) : (
        <div className="grid gap-1 grid-cols-2 md:grid-cols-3">
          {arr.map((image, index) => (
            <div
              key={index}
              className="h-64"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={`${cloudinaryBase}/${image}?w=500&h=500&fit=crop&auto=webp`}
                alt={`Image-${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mediadisplay;
