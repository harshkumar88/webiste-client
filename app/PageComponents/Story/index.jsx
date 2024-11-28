import { slideLeft, slideRight } from "../../Handlers/commonhandlers";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { story_data } from "../../static";
import Slider from "../../CommonComponents/Slider";
import StoryCard from "../../CommonComponents/Cards/StoryCard";

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
    <div
      className="flex flex-col gap-[60px] mx-auto  bg-green_gradient  w-[100%] md:px-[80px] xsm:px-[40px] px-[20px] md:py-[60px] xsm:py-[70px] py-[60px]  overflow-hidden"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row justify-between items-baseline w-[100%]    mx-auto">
        <div className="flex flex-col gap-2 w-[100%]  md:w-[90%] lg:w-[45%]">
          <p className="text-[32px] sm:text-[42px]  md:text-[44px] text-white font-bold md:text-start text-center">
            Pick a{" "}
            <span className="bg-yellow_light text-green_gradient text-[32px] sm:text-[42px]">
              Story
            </span>
          </p>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-white md:w-[90%] w-[100%] md:text-start text-center">
            Say NO to boring videos and create interesting, interactive,
            creative videos that boost performance. Say NO to boring videos and
            create interesting,
          </p>
        </div>
        <div className="md:flex hidden gap-4 justify-end w-full sm:w-[50%]  ">
          <IoMdArrowBack
            size={40}
            className={`cursor-pointer text-white ${
              !left ? "opacity-50 cursor-not-allowed" : ""
            } border border-white transition duration-300 rounded-full p-1`}
            onClick={() => slideLeft(left, cardRef, 5, 27)}
          />
          <IoMdArrowForward
            size={40}
            className={`cursor-pointer text-white ${
              !right ? "opacity-50 cursor-not-allowed" : ""
            } border border-white transition duration-300 rounded-full p-1`}
            onClick={() => slideRight(right, cardRef, 5, 27)}
          />
        </div>
      </div>
      <Slider
        checkScroll={checkScroll}
        cardRef={cardRef}
        style={
          " overflow-x-auto  flex gap-[27px] w-[100%] mx-auto remove_scrollbar"
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
