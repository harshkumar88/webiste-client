import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default styles
import { Carousel } from "react-responsive-carousel";
import styles from "./slider.module.css"; // Import custom styles
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CardCarousel = ({ children, carouselRef, handleChange }) => {
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(carouselRef.current.state.selectedItem - 1); // Navigate to the previous slide
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(carouselRef.current.state.selectedItem + 1); // Navigate to the next slide
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <Carousel
        ref={carouselRef}
        className={styles.customCarousel}
        autoPlay
        infiniteLoop
        emulateTouch={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        renderIndicator={() => <></>}
        transitionTime={1000}
        onChange={handleChange}
      >
        {children}
      </Carousel>

      <div className="flex justify-between w-[100%] absolute top-[50%]">
        <MdChevronLeft
          size={40}
          className={`cursor-pointer  hover:border hover:bg-gray-200 transition duration-300 rounded-full p-1`}
          onClick={handlePrev}
        />
        <MdChevronRight
          size={40}
          className={`cursor-pointer  hover:border hover:bg-gray-200 transition duration-300 rounded-full p-1`}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default CardCarousel;
