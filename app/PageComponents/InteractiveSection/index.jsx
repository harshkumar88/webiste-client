import { interactive_section_data } from "../../static";
import InteractiveSectionCard from "../../CommonComponents/Cards/InteractiveSectionCard";
import CardCarousel from "../../CommonComponents/Caraousel";
import { useRef, useState } from "react";
import InteractivePolygon1 from "../../assets/svg/interactivepolygon1";
import InteractivePolygon2 from "../../assets/svg/interactivepolygon2";

const InteractiveSection = () => {
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
      className="md:w-[93%] w-[100%] ml-auto flex flex-col md:flex-row items-center  sm:gap-10 justify-between  overflow-hidden "
      id="grow"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:w-[30%] w-[90%]">
        <p className="text-[2.5rem] md:text-start text-center lg:font-normal font-bold ">
          Interactive{" "}
          <span className="highlight_text_bottom lg:hidden inline">Videos</span>
        </p>
        <p className="md:text-[3.5rem] text-[3rem] font-bold md:text-start text-center lg:block hidden">
          <span className="highlight_text_bottom">Videos</span>
        </p>
        <p className="text-[1rem] mt-4 md:block hidden">
          Create videos that perform using advanced tools and techniques that
          grab attention. Create videos that perform using advanced tools and
          techniques that grab attention. Create videos that perform using.
        </p>

        <p className="text-[1rem] mt-4 md:hidden block md:text-start text-center w-[80%] mx-auto">
          Create videos that perform using advanced tools and techniques that
          grab attention.
        </p>
      </div>

      <div className="lg:w-[60%] md:w-[70%] w-[100%]  sm:h-[480px] h-[300px]  flex lg:justify-start justify-center overflow-hidden md:p-0 relative md:rounded-tl-[50px] md:rounded-bl-[50px]">
        <div className="sm:block hidden">
          <InteractivePolygon1 />
        </div>
        <div className="sm:hidden block">
          <InteractivePolygon2 />
        </div>

        <div className="bg-green_gradient sm:h-[200px] h-[150px] sm:w-[50px]  w-[40px] absolute sm:top-[32%] top-[25%] md:left-5 sm:left-20 left-[14px] rounded-[50px] flex flex-col gap-5 items-center justify-center">
          <img
            src="/Interactive/animated_images.png"
            className="sm:w-[30px] w-[20px]"
          />
          <img
            src="/Interactive/palette.png"
            className="sm:w-[30px] w-[20px]"
          />
          <img
            src="/Interactive/camera_video.png"
            className="sm:w-[30px] w-[20px]"
          />
        </div>

        <div className="absolute  sm:w-[60%] w-[70%] p-4 lg:bottom-[7%] md:bottom-[3%] sm:bottom-[7%] bottom-[5%] lg:left-[25%] md:left-[31%] sm:left-[250px]  left-[110px] ">
          <div className="flex flex-col me-0 mx-auto  z-10  ">
            <p className=" flex items-center gap-2 text-[1.2rem]">
              <span className="font-bold sm:text-[1.3rem] text-[1.2rem]">
                One chat experience
              </span>
            </p>
            <p className="sm:text-[1rem] text-gray-500 text-[0.9rem]">
              Help people navigate through difficult parts of your video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSection;
