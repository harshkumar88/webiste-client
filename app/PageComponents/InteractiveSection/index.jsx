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
      className="md:w-[93%] w-[100%]  ml-auto   overflow-hidden flex flex-col gap-10  "
      id="grow"
      data-aos="fade-up"
    >
      <CardCarousel
        hide="true"
        carouselRef={carouselRef}
        styles={styles}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        autoSlideInterval="10000"
      >
        {interactive_section_data?.map((item, idx) => {
          return <SectionCard show={show} key={idx} item={item} />;
        })}
      </CardCarousel>

      <div className=" justify-center sm:mt-5  space-x-2 flex ">
        {interactive_section_data.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? "w-8 h-3 bg-green_gradient rounded-full" // Active dot: oval-shaped, dark green
                : "w-3 h-3 bg-gray-300 rounded-full" // Inactive dots: narrow and light gray
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveSection;
