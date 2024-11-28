import { useRef, useState } from "react";
import Slider from "../../CommonComponents/Slider";
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
      className=" w-[100%] md:ps-[80px] ml-auto flex flex-col md:flex-row items-center sm:gap-[50px] gap-[30px] justify-between md:mt-5 overflow-hidden "
      data-aos="fade-up"
    >
      <div className="flex flex-col md:w-[30%] w-[90%]">
        <p className="md:text-[14px] xsm:text-[22px] text-[14px] md:text-start text-center ">
          Let’s talk about
        </p>
        <p className="md:text-[44px] xsm:text-[42px] text-[32px] font-bold md:mx-0  mx-auto bg-yellow_light w-fit ">
          Your <span className="">Needs</span>
        </p>
        <p className="xsm:text-[18px] text-[15px] mt-2 md:block hidden">
          Say NO to boring videos and create interesting, interactive, creative
          videos that boost performance. Say NO to boring videos and create
          interesting, interactive, creative videos that boost performance.
        </p>
        <p className="xsm:text-[18px] text-[15px] mt-2 md:hidden block md:text-start text-center w-[80%] mx-auto">
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
            onClick={() => slideLeft(left, cardRef, 3, 20)}
          />
          <IoMdArrowForward
            size={40}
            className={`cursor-pointer text-black  bg-gray-300 ${
              !right ? "opacity-50 cursor-not-allowed" : ""
            } border border-gray transition duration-300 rounded-full p-2`}
            onClick={() => slideRight(right, cardRef, 3, 20)}
          />
        </div>
        <Slider
          checkScroll={checkScroll}
          cardRef={cardRef}
          style={
            "flex  mx-auto gap-[20px] overflow-x-auto remove_scrollbar me-0 w-[100%] py-12 sm:ps-[40px] ps-[20px] w-[99%] pe-3 "
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
