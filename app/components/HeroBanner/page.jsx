import { useRef, useState } from "react";
import CardCarousel from "../CommonComponents/Caraousel/page";
import HeroCard from "../CommonComponents/Cards/HeroCard";
import CardZoomer from "../CommonComponents/CardZoomer/page";
import { card_zoomer_content } from "../../static";
const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Create a ref for the carousel

  const handleDotClick = (index) => {
    setActiveIndex(index);
    carouselRef.current.moveTo(index); // moves to selected slide
  };

  const handleChange = (index) => {
    setActiveIndex(index); // updates active index on slide change
  };

  return (
    <section className="flex flex-col sm:gap-16 gap-5 bg-green_gradient pb-16 pt-10 ">
      <div className="flex justify-between flex-col lg:flex-row  lg:gap-0  gap-8 items-center md:w-[90%] w-[95%] mx-auto sm:px-4 px-2 pb-5 ">
        <div className=" lg:w-[50%] w-[100%] px-6 lg:block hidden ">
          <p className="xl:text-[4.5rem] lg:text-[4rem] md:text-[3.5rem] sm:text-[3.8rem] text-[3rem] font-bold text-white">
            Your Hub
          </p>
          <p className="xl:text-[4.5rem] lg:text-[3.9rem] md:text-[3.5rem]  sm:text-[3.8rem] text-[2.5rem]  font-bold text-white">
            For{" "}
            <span className="bg-yellow_light text-green_gradient ">
              Unlocking
            </span>
          </p>
          <p className="xl:text-[4.5rem] lg:text-[3.9rem] md:text-[3.5rem]  sm:text-[3.8rem] text-[2.5rem]  font-bold text-white">
            True Potential
          </p>
        </div>
        <div className=" w-[100%]  text-center lg:hidden block">
          <p className="xl:text-[4.5rem] lg:text-[3.9rem] md:text-[3.5rem] sm:text-[3.8rem] text-[3rem] font-bold text-white">
            Your Hub For{" "}
            <span className="bg-yellow_light text-green_gradient ">
              Unlocking
            </span>{" "}
            True Potential
          </p>
        </div>
        <div className=" lg:w-[70%] w-[100%]  md:block hidden me-15">
          <CardZoomer content={card_zoomer_content} />
        </div>
        <div
          className="flex  items-start  gap-5  md:hidden overflow-x-auto remove_scrollbar w-[100%] "
          style={{ borderRadius: "30px" }}
        >
          <CardCarousel
            hide="true"
            carouselRef={carouselRef}
            handleChange={handleChange}
          >
            {card_zoomer_content.map((item, idx) => (
              <HeroCard key={idx} card={item} />
            ))}
          </CardCarousel>
        </div>{" "}
        <div className=" justify-center sm:mt-5  space-x-2 md:hidden flex">
          {card_zoomer_content.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "w-8 h-3 bg-white rounded-full" // Active dot: oval-shaped, dark green
                  : "w-3 h-3 bg-gray-300 rounded-full" // Inactive dots: narrow and light gray
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
