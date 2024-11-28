import CardCarousel from "../../CommonComponents/Caraousel";
import { useRef, useState } from "react";
import SectionCard from "./component/SectionCard";
import styles from "./css/slider.module.css";
import { interactive_section_data } from "../../static";

const InteractiveSection = ({ show }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Create a ref for the carousel

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className=" w-[100%] md:px-[80px] xsm:px-[40px] px-[10px] mx-auto    flex flex-col gap-[10px] "
      id="grow"
      data-aos="fade-up"
    >
      <div className=" overflow-hidden">
        <CardCarousel
          hide="true"
          carouselRef={carouselRef}
          styles={styles}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          autoSlideInterval="10000"
          per={100}
        >
          {interactive_section_data?.map((item, idx) => {
            return <SectionCard show={show} key={idx} item={item} />;
          })}
        </CardCarousel>
      </div>

      <div className=" justify-center sm:mt-5  space-x-2 flex ">
        {interactive_section_data.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? "sm:w-[38px] sm:h-[13px] w-[21px] h-[7px] bg-green_gradient rounded-full" // Active dot: oval-shaped, dark green
                : "sm:w-[12px] sm:h-[12px] w-[7px] h-[7px] bg-gray-300 rounded-full" // Inactive dots: narrow and light gray
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveSection;
