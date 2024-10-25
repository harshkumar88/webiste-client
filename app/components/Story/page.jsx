import { slideLeft, slideRight } from "../../Handlers/commonhandlers";
import { useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { story_data } from "../../static";
import Slider from "../CommonComponents/Slider/page";
import StoryCard from "../Cards/StoryCard";

const Story = () => {
  let [left, setLeft] = useState(false);
  let [right, setRight] = useState(true);
  const cardRef = useRef();

  function checkScroll() {
    const { scrollLeft, offsetWidth, scrollWidth } = cardRef.current;
    setRight(scrollLeft + offsetWidth < scrollWidth - 5);
    setLeft(scrollLeft > 0);
  }

  return (
    <div className="flex flex-col gap-5 md:w-[85%] mx-auto sm:mt-4">
      <div className="flex justify-between items-center  md:flex-row flex-col w-[100%] mx-auto">
        <div className="flex flex-col gap-2 md:w-[35%] w-[85%]">
          <p className="sm:text-[3.5rem] text-[3.2rem] font-bold highlight_text_bottom">
            Pick a Story!
          </p>
          <p className="text-[1.1rem]">
            Say NO to boring videos and create interesting, interactive,
            creative videos that boost performance. Say NO to boring videos and
            create interesting,
          </p>
        </div>
        <div className="flex gap-6 sm:justify-end justify-start w-[50%] me-10 mt-3">
          <IoMdArrowBack
            size={40}
            className={`cursor-pointer ${
              !left ? "opacity-50 cursor-not-allowed" : ""
            } border border-gray-500 transition duration-300 rounded-full p-1`}
            onClick={() => slideLeft(left, cardRef)}
          />
          <IoMdArrowForward
            size={40}
            className={`cursor-pointer ${
              !right ? "opacity-50 cursor-not-allowed" : ""
            } border border-gray-500 transition duration-300 rounded-full p-1`}
            onClick={() => slideRight(right, cardRef)}
          />
        </div>
      </div>
      <Slider
        checkScroll={checkScroll}
        cardRef={cardRef}
        style={
          " overflow-x-auto md:mt-2 lg:mt-0 xl:mt-0 flex md:gap-10 gap-2 sm:w-[100%] w-[95vw] mx-auto remove_scrollbar"
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
