import { useRef, useState } from "react";
import CardCarousel from "../../CommonComponents/Caraousel";
import HeroCard from "../../CommonComponents/Cards/HeroCard";
import CardZoomer from "../../CommonComponents/CardZoomer";
import { card_zoomer_content } from "../../static";
import styles from "./css/slider.module.css";
const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Create a ref for the carousel
  const [triggerInterval, setTriggerInterval] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setTriggerInterval((prev) => prev + 1);
  };

  return (
    <section className="flex flex-col  bg-green_gradient pb-16 sm:pt-[70px] pt-[40px] ">
      <div className="flex justify-between flex-col lg:flex-row  lg:gap-[54px] sm:gap-[50px] gap-[40px] items-center lg:w-[1280px] sm:w-[768px] mx-auto  ">
        <div className=" lg:w-[50%] w-[100%]  lg:block hidden  ">
          <p className="sm:text-[54px] lg:text-[64px]  font-bold text-white">
            Your Hub
          </p>
          <p className="sm:text-[54px] lg:text-[64px] text-[44px] font-bold text-white">
            For{" "}
            <span className="bg-yellow_light text-green_gradient  lg:text-[64px] sm:text-[54px]">
              Unlocking
            </span>
          </p>
          <p className="lg:text-[64px] sm:text-[54px] text-[44px]  font-bold text-white">
            True Potential
          </p>
        </div>
        <div className="sm:w-[688px]  w-[320px]  text-[44px] text-center lg:hidden block">
          <p className="sm:text-[54px] text-[44px] font-bold text-white">
            Your Hub For{" "}
            <span className="bg-yellow_light text-green_gradient text-[44px] ">
              Unlocking
            </span>{" "}
            True Potential
          </p>
        </div>
        <div className=" lg:w-[70%] w-[100%]  md:block hidden ">
          <CardZoomer content={card_zoomer_content} />
        </div>
        <div
          className="flex  sm:w-[688px] sm:h-[460px] w-[320px]  h-[270px] md:hidden overflow-x-auto remove_scrollbar "
          style={{ borderRadius: "30px" }}
        >
          <CardCarousel
            hide={true}
            carouselRef={carouselRef}
            styles={styles}
            autoSlideInterval="4000"
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            per={100}
            gap={"10px"}
            triggerInterval={triggerInterval}
          >
            {card_zoomer_content.map((item, idx) => (
              <HeroCard key={idx} card={item} />
            ))}
          </CardCarousel>
        </div>{" "}
        <div className=" justify-center  space-x-2 md:hidden flex">
          {card_zoomer_content.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "sm:w-[38px] sm:h-[13px] w-[21px] h-[7px] bg-white rounded-full" // Active dot: oval-shaped, dark green
                  : "sm:w-[12px] sm:h-[12px] w-[7px] h-[7px] bg-gray-300 rounded-full" // Inactive dots: narrow and light gray
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
