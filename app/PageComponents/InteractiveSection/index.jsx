import { interactive_section_data } from "../../static";
import InteractiveSectionCard from "../../CommonComponents/Cards/InteractiveSectionCard";
import CardCarousel from "../../CommonComponents/Caraousel";
import { useRef, useState } from "react";
import InteractivePolygon from "../../assets/svg/interactivepolygon";

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
      className="md:w-[93%] w-[100%] ml-auto flex flex-col md:flex-row items-center  gap-10 justify-between  overflow-hidden "
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

      <div className="lg:w-[60%] md:w-[70%] w-[100%]  flex lg:justify-start justify-center  overflow-hidden md:p-0 relative md:rounded-tl-[50px] md:rounded-bl-[50px]">
        <InteractivePolygon />

        <div className="bg-green_gradient h-[200px] w-[50px] absolute top-[32%] md:left-5 sm:left-20 left-[10px] rounded-[50px] flex flex-col gap-5 items-center justify-center">
          <img src="/Interactive/animated_images.png" className="w-[30px]" />
          <img src="/Interactive/palette.png" className="w-[30px]" />
          <img src="/Interactive/camera_video.png" className="w-[30px]" />
        </div>

        <div className="absolute  w-[60%] p-4 lg:bottom-[7%] md:bottom-[3%] bottom-[7%] lg:left-[25%] md:left-[31%] sm:left-[250px] left-[170px] ">
          <div className="flex flex-col me-0 mx-auto  z-10  ">
            <p className=" flex items-center gap-2 text-[1.2rem]">
              <span className="font-bold sm:text-[1.3rem]">
                One chat experience
              </span>
            </p>
            <p className="sm:text-[1rem] text-gray-500">
              Help people navigate through difficult parts of your video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSection;

{
  /* <div className="flex flex-col" id="build">
  <div className="lg:w-[87%] md:w-[93%] sm:w-[85%] w-[100%] ml-auto flex flex-col md:flex-row items-center sm:items-start gap-10  md:mt-5 ">
    <div className="flex flex-col md:w-[35%] lg:w-[25%]  sm:w-[85%] w-[100%]">
      <p className="md:text-[3rem] text-[2rem] font-bold md:block flex gap-3 sm:text-start sm:justify-start justify-center ">
        <span className="">Interactive</span>
        <span className=" w-fit font-bold block md:hidden bg-yellow_light">
          Videos
        </span>
      </p>
      <p className="md:text-[3rem] text-[2.5rem]  w-fit font-bold md:block hidden bg-yellow_light">
        Videos
      </p>
      <p className="text-[1.4rem] mt-4 sm:text-start text-center mx-auto sm:w-[100%] w-[90%]  sm:h-auto h-[9vh] overflow-hidden">
        Create videos that perform using advanced tools and techniques that grab
        attention. Create videos that perform using advanced tools and
        techniques that grab attention. Create videos that perform using.
      </p>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="650"
      height="480"
      viewBox="0 0 750 480"
      fill="none"
      className="custom_shape bg-yellow_light"
    >
      <CardCarousel
        hide="true"
        carouselRef={carouselRef}
        handleChange={handleChange}
      >
        {interactive_section_data.map((item, idx) => (
          <InteractiveSectionCard key={idx} item={item} />
        ))}
      </CardCarousel>
    </svg>
    <svg
      className="md:w-[450px] sm:w-[75%] w-[90%] overflow-x-auto md:p-0 md:mx-auto custom_shape bg-yellow_light h-[480px]"
      viewBox="0 0 750 480"
    >
      <CardCarousel
        hide="true"
        carouselRef={carouselRef}
        handleChange={handleChange}
      >
        {interactive_section_data.map((item, idx) => (
          <InteractiveSectionCard key={idx} item={item} />
        ))}
      </CardCarousel>

      <InteractiveSectionCard key={0} item={""} />

      <div className="relative w-full">
        <div className="flex flex-col w-[85%] mt-[-15%] me-0 mx-auto bg-white z-10 shadow-lg rounded-tl-[50px] p-6">
          <p className=" flex items-center gap-2 text-[1.2rem]">
            <span className="font-bold sm:text-[1.7rem]">
              One chat experience
            </span>
          </p>
          <p className="sm:text-[1.1rem]">
            Help people navigate through difficult parts of your video
          </p>
        </div>
      </div>
    </svg>
  </div>

  <div className="flex justify-center sm:mt-5 mt-10 space-x-2">
    {interactive_section_data.map((_, index) => (
      <span
        key={index}
        className={`cursor-pointer transition-all duration-300 ease-in-out ${
          activeIndex === index
            ? "w-8 h-3 bg-green-900 rounded-full" // Active dot: oval-shaped, dark green
            : "w-3 h-3 bg-gray-300 rounded-full" // Inactive dots: narrow and light gray
        }`}
        onClick={() => handleDotClick(index)}
      />
    ))}
  </div>
</div>; */
}
