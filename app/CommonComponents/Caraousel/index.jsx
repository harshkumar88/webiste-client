import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CardCarousel = ({
  children,
  carouselRef,
  hide,
  styles,
  autoSlideInterval = 3000, // Default to 3 seconds auto-slide
  setActiveIndex,
  activeIndex,
  per,
  gap,
  triggerInterval,
}) => {
  const totalItems = children?.length;

  // Handle next button click
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems); // Loops to the first item if on the last
  };

  // Handle previous button click
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems // Loops to the last item if on the first
    );
  };

  // Auto-slide functionality using setInterval
  useEffect(() => {
    const interval = setInterval(handleNext, autoSlideInterval); // Move to the next item every `autoSlideInterval` ms

    // Cleanup interval on component unmount or when auto-slide stops
    return () => clearInterval(interval);
  }, [triggerInterval]);

  return (
    <div className={styles.sliderContainer}>
      <div
        ref={carouselRef}
        className={styles.customCarousel}
        style={{
          transform: `translateX(calc(-${activeIndex * per}%))`, // Adjusting with gap in percentage
          transition: "transform 1s ease-in-out", // Smooth transition effect
        }}
      >
        {children}
      </div>

      {!hide && (
        <div className="flex justify-between w-[100%] absolute top-[50%]">
          <MdChevronLeft
            size={40}
            className={`cursor-pointer hover:border hover:bg-gray-200 transition duration-300 rounded-full p-1`}
            onClick={handlePrev}
          />
          <MdChevronRight
            size={40}
            className={`cursor-pointer hover:border hover:bg-gray-200 transition duration-300 rounded-full p-1`}
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  );
};

export default CardCarousel;
