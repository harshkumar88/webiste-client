import { slideLeft, slideRight } from "../../Handlers/commonhandlers";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { story_data } from "../../static";
import Slider from "../CommonComponents/Slider/page";
import StoryCard from "../Cards/StoryCard";

const Story = () => {
  let [left, setLeft] = useState(false);
  let [right, setRight] = useState(true);
  const cardRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  function checkScroll() {
    const { scrollLeft, offsetWidth, scrollWidth } = cardRef.current;
    setRight(scrollLeft + offsetWidth < scrollWidth - 5);
    setLeft(scrollLeft > 0);
  }

  return (
    <div className="flex flex-col gap-5 mx-auto sm:mt-10 mt-5 bg-green_gradient pt-5 pb-14 px-4 w-[100%] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mt-8 mx-auto">
        <div className="flex flex-col gap-2 w-[100%]  md:w-[90%] lg:w-[45%]">
          <p className="text-[2.5rem] sm:text-[3rem] md:text-[3.3rem] lg:text-[3.1rem] text-white font-bold md:text-start text-center">
            Pick a{" "}
            <span className="bg-yellow_light text-green_gradient">Story</span>
          </p>
          <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-white md:w-[90%] w-[100%] md:text-start text-center">
            Say NO to boring videos and create interesting, interactive,
            creative videos that boost performance. Say NO to boring videos and
            create interesting,
          </p>
        </div>
        <div className="md:flex hidden gap-4 justify-end w-full sm:w-[50%] mt-3 pe-[15%]  ">
          <IoMdArrowBack
            size={40}
            className={`cursor-pointer text-white ${
              !left ? "opacity-50 cursor-not-allowed" : ""
            } border border-white transition duration-300 rounded-full p-1`}
            onClick={() => slideLeft(left, cardRef, 5)}
          />
          <IoMdArrowForward
            size={40}
            className={`cursor-pointer text-white ${
              !right ? "opacity-50 cursor-not-allowed" : ""
            } border border-white transition duration-300 rounded-full p-1`}
            onClick={() => slideRight(right, cardRef, 5)}
          />
        </div>
      </div>
      <Slider
        checkScroll={checkScroll}
        cardRef={cardRef}
        style={
          " overflow-x-auto md:mt-3 lg:mt-0 xl:mt-4 flex md:gap-10 gap-6  w-[90%] mx-auto remove_scrollbar"
        }
      >
        {story_data?.map((item, idx) => {
          return <StoryCard key={idx} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default Story;
