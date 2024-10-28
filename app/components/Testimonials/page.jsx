import { slideLeft, slideRight } from "../../Handlers/commonhandlers";
import { useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { testimonials_data } from "../../static";
import Slider from "../CommonComponents/Slider/page";
import TestimonialCard from "../Cards/TestimonialCard";

const Testimonials = () => {
  let [left, setLeft] = useState(false);
  let [right, setRight] = useState(true);
  const cardRef = useRef();

  function checkScroll() {
    const { scrollLeft, offsetWidth, scrollWidth } = cardRef.current;
    setRight(scrollLeft + offsetWidth < scrollWidth - 5);
    setLeft(scrollLeft > 0);
  }

  return (
    <div className="flex flex-col gap-5 mx-auto  pb-14 px-4 w-[100%] lg:w-[95%] mb-20 ">
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mt-8 mx-auto">
        <div className="flex flex-col gap-2 w-[100%] sm:w-[95%]">
          <p className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-black font-bold">
            Because they love us
          </p>
          <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-black sm:w-[90%] w-[100%]">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div className="flex gap-4 justify-start sm:justify-end w-full sm:w-[90%] mt-3">
          <IoMdArrowBack
            size={30}
            className={`cursor-pointer text-black ${
              !left ? "opacity-50 cursor-not-allowed" : ""
            } border border-black transition duration-300 rounded-full p-1`}
            onClick={() => slideLeft(left, cardRef)}
          />
          <IoMdArrowForward
            size={30}
            className={`cursor-pointer text-black ${
              !right ? "opacity-50 cursor-not-allowed" : ""
            } border border-black transition duration-300 rounded-full p-1`}
            onClick={() => slideRight(right, cardRef)}
          />
        </div>
      </div>
      <div className=" mt-5 w-[100%] px-4 relative">
        <div className="bg-yellow_light h-[30vh] w-[100%]"></div>
        <Slider
          checkScroll={checkScroll}
          cardRef={cardRef}
          style="overflow-x-auto mt-8 flex md:gap-10 gap-4 sm:w-[90vw] w-[90vw] mx-auto remove_scrollbar absolute top-0 left-10 z-0 pb-4 pe-10"
        >
          {testimonials_data?.map((item, idx) => {
            return <TestimonialCard key={idx} item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
