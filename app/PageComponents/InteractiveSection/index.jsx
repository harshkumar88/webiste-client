import { interactive_section_data } from "../../static";
import InteractiveSectionCard from "../../CommonComponents/Cards/InteractiveSectionCard";
import CardCarousel from "../../CommonComponents/Caraousel";
import { useRef, useState } from "react";

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
    <div className="flex flex-col" id="build">
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
            Create videos that perform using advanced tools and techniques that
            grab attention. Create videos that perform using advanced tools and
            techniques that grab attention. Create videos that perform using.
          </p>

          {/* <Button
            btn_type="button"
            content="Know More"
            btn_styles={
              "bg-green_gradient text-yellow_light w-[200px] border border-gray-300 rounded-full px-5 py-2 lg:text-[1.4rem] md:text-[1.2rem] text-[1rem] mt-5"
            }
          /> */}
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
        {/* <svg
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
          </CardCarousel> */}

        {/* <InteractiveSectionCard key={0} item={""} /> */}

        {/* <div className="relative w-full">
            <div className="flex flex-col w-[85%] mt-[-15%] me-0 mx-auto bg-white z-10 shadow-lg rounded-tl-[50px] p-6">
              <p className=" flex items-center gap-2 text-[1.2rem]">
                <span className="font-bold sm:text-[1.7rem]">
                  One chat experience
                </span>{" "}
              </p>
              <p className="sm:text-[1.1rem]">
                Help people navigate through difficult parts of your video
              </p>
            </div>
          </div> */}
        {/* </svg>{" "} */}
      </div>{" "}
      {/* Custom Dots */}
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
    </div>
  );
};

export default InteractiveSection;
