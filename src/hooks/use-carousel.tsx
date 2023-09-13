import { useState } from "react";

function useCarousel(imagesLength: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === imagesLength ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? imagesLength - 1 : prevIndex - 1));
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return [currentIndex, { handleNext, handlePrevious, handleDotClick }] as const;
}

export default useCarousel;
