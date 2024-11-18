import { interactive_section_data } from "../../static";
import InteractiveSectionCard from "../../CommonComponents/Cards/InteractiveSectionCard";
import CardCarousel from "../../CommonComponents/Caraousel";
import { useRef, useState } from "react";

const FeaturesInteractive = () => {
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
    <div
      className="md:w-[93%] w-[100%] ml-auto flex flex-col items-center xsm:gap-10 gap-4 justify-between  overflow-hidden "
      id="grow"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:w-[30%] w-[90%]">
        <p className="text-[2.5rem] md:text-start text-center font-bold ">
          Interactive <span className="highlight_text_bottom">Videos</span>
        </p>

        <p className="text-[1rem] mt-4  md:text-start text-center w-[80%] mx-auto">
          Build for Advanced Learning.
        </p>
      </div>
      {/* md:w-[70%] w-[100%] */}

      <div className="  w-[90%] xsm:h-[400px] h-[280px]  flex lg:justify-start justify-center overflow-hidden md:p-0 relative md:rounded-tl-[50px] md:rounded-bl-[50px] ">
        {/* Interactive Polygon Components */}
        <img src={"/Interactive/img.png"} className=" w-[100%] " />

        <div className="absolute  sm:w-[60%] w-[70%] p-4 md:bottom-[1%]  sm:bottom-[-3%] bottom-[-5%] lg:left-[25%] left-[30%] ">
          <div className="flex flex-col me-0 mx-auto  z-10  ">
            <p className=" flex items-center gap-2 text-[1.2rem]">
              <span className="font-bold sm:text-[1.3rem] text-[1.1rem]">
                One chat experience
              </span>
            </p>
            <p className="sm:text-[1rem] text-gray-500 text-[0.8rem]">
              Help people navigate through difficult parts of your video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesInteractive;
