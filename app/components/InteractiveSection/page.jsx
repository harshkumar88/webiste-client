import { interactive_section_data } from "../../static";
import Card from "./card";
import Button from "../CommonComponents/Button";
import CardCarousel from "../CommonComponents/Caraousel/page";
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
      <div className="w-[90%] ml-auto flex flex-col md:flex-row items-center gap-10  md:mt-5 ">
        <div className="flex flex-col md:w-[25%] w-[90%]">
          <p className="md:text-[3.4rem] text-[3rem] font-bold highlight_text_top">
            Interactive
          </p>
          <p className="md:text-[3.4rem] text-[3rem] font-bold">Videos</p>
          <p className="text-[1.4rem] mt-4">
            Create videos that perform using advanced tools and techniques that
            grab attention.
          </p>

          <Button
            btn_type="button"
            content="Know More"
            btn_styles={
              "bg-green_gradient text-yellow_light w-[200px] border border-gray-300 rounded-full px-5 py-2 lg:text-[1.4rem] md:text-[1.2rem] text-[1rem] mt-5"
            }
          />
        </div>
        <div
          className="md:w-[35%] sm:w-[50%] w-[100%]  overflow-x-auto md:p-0 mx-auto  "
          style={{ borderRadius: "50px  " }}
        >
          <CardCarousel carouselRef={carouselRef} handleChange={handleChange}>
            {interactive_section_data.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
          </CardCarousel>
          <div className="relative w-full">
            <div className="flex flex-col w-[85%] mt-[-13%] me-0 mx-auto bg-white z-10 shadow-lg rounded-tl-[50px] p-6">
              <p className=" flex items-center gap-2 text-[1.2rem]">
                <span className="font-bold text-[1.7rem]">
                  One chat experience
                </span>{" "}
                - Help people.
              </p>
              <p className="text-[1.1rem]">
                Navigate through difficult parts of your video
              </p>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      {/* Custom Dots */}
      <div className="flex justify-center mt-5 space-x-2">
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
