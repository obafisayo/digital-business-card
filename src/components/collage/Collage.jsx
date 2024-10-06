import React, { useState, useEffect, useMemo } from "react";
import Loading from "../loadingDiv/Loading";
import Mediadisplay from "../mediadisplay/Mediadisplay";

const Collage = ({ images }) => {
  const cloudinaryBase = "https://res.cloudinary.com/dafdhu3h5/image/upload";
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 6;

  const currentImages = useMemo(() => {
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    return images.slice(indexOfFirstImage, indexOfLastImage);
  }, [images, currentPage]);

  useEffect(() => {
    setLoading(true);
    const imageElements = currentImages.map((image) => new Image());
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
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="">
      {loading ? <Loading /> : <Mediadisplay arr={currentImages} big />}
      {!loading && (
        <>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white rounded px-4 py-2 disabled:bg-transparent disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-blue-500 text-white rounded px-4 py-2 disabled:bg-transparent disabled:cursor-not-allowed"
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
};

export default Collage;
