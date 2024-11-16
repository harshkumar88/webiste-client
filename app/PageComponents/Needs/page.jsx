import { useRef, useState } from "react";
import Slider from "../../CommonComponents/Slider/page";
import { need_slider_data } from "../../static";
import NeedsCard from "../../CommonComponents/Cards/NeedsCard";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { slideLeft, slideRight } from "../../Handlers/commonhandlers";

const NeedsComponent = () => {
  let [left, setLeft] = useState(false);
  let [right, setRight] = useState(true);
  const cardRef = useRef();

  function checkScroll() {
    const { scrollLeft, offsetWidth, scrollWidth } = cardRef.current;
    setRight(scrollLeft + offsetWidth < scrollWidth - 5);
    setLeft(scrollLeft > 0);
  }

  return (
    <div
      className="md:w-[93%] w-[100%] ml-auto flex flex-col md:flex-row items-center sm:gap-20 gap-10 justify-between md:mt-5 overflow-hidden "
      id="grow"
    >
      <div className="flex flex-col md:w-[30%] w-[90%]">
        <p className="text-[2.5rem] md:text-start text-center ">
          Let’s talk about
        </p>
        <p className="md:text-[3.5rem] text-[3rem] font-bold md:text-start text-center">
          Your <span className="highlight_text_bottom">Needs</span>
        </p>
        <p className="text-[1rem] mt-4 md:block hidden">
          Say NO to boring videos and create interesting, interactive, creative
          videos that boost performance. Say NO to boring videos and create
          interesting, interactive, creative videos that boost performance.
        </p>
        <p className="text-[1rem] mt-4 md:hidden block md:text-start text-center w-[80%] mx-auto">
          Create videos that perform using advanced tools and techniques that
          grab attention.
        </p>
      </div>

      <div className="md:w-[60%] w-[100%] bg-yellow_light  overflow-x-auto md:p-0 relative md:rounded-tl-[50px] md:rounded-bl-[50px]">
        <div className=" gap-4 justify-between w-full sm:w-[90%] top-[50%] pe-[15%]  absolute left-0 md:flex hidden">
          <IoMdArrowBack
            size={40}
            className={`cursor-pointer text-black bg-gray-300 ${
              !left ? "opacity-50 cursor-not-allowed" : ""
            } border border-gray transition duration-300 rounded-full p-2`}
            onClick={() => slideLeft(left, cardRef)}
          />
          <IoMdArrowForward
            size={40}
            className={`cursor-pointer text-black  bg-gray-300 ${
              !right ? "opacity-50 cursor-not-allowed" : ""
            } border border-gray transition duration-300 rounded-full p-2`}
            onClick={() => slideRight(right, cardRef)}
          />
        </div>
        <Slider
          checkScroll={checkScroll}
          cardRef={cardRef}
          style={
            "flex  mx-auto sm:gap-7 gap-6 overflow-x-auto remove_scrollbar me-0 w-[99%] py-12 sm:ps-10 ps-4 pe-3 "
          }
        >
          {need_slider_data.map((item, idx) => (
            <NeedsCard key={idx} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NeedsComponent;
