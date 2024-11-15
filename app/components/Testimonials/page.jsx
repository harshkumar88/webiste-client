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
    <div className="w-[100%] mb-5 sm:h-[600px] h-[580px]  ">
      <div className="flex flex-col gap-5 mx-auto   px-4 h-[400px] bg-yellow_light">
        <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mt-8 mx-auto ">
          <div className="flex flex-col gap-2  w-[100%]  md:w-[90%] lg:w-[100%]">
            <p className="text-[1.8rem] sm:text-[3rem] md:text-[2.3rem] lg:text-[3.1rem] text-green_gradient font-bold md:text-start text-center">
              Because They{" "}
              <span className="text-yellow_light bg-green_gradient px-2 ">
                Love
              </span>{" "}
              Us
            </p>
            <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-black  w-[100%] md:text-start text-center">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <div className="md:flex  hidden gap-4 justify-end w-full sm:w-[90%] mt-3 pe-[15%]">
            <IoMdArrowBack
              size={40}
              className={`cursor-pointer text-black ${
                !left ? "opacity-50 cursor-not-allowed" : ""
              } border border-black transition duration-300 rounded-full p-1`}
              onClick={() => slideLeft(left, cardRef, 5)}
            />
            <IoMdArrowForward
              size={40}
              className={`cursor-pointer text-black ${
                !right ? "opacity-50 cursor-not-allowed" : ""
              } border border-black transition duration-300 rounded-full p-1`}
              onClick={() => slideRight(right, cardRef, 5)}
            />
          </div>
        </div>
        <div className=" xsm:w-[92%] w-[100%] xsm:px-4 relative mx-auto ">
          <div className=" h-[30vh] w-[100%]"></div>
          <Slider
            checkScroll={checkScroll}
            cardRef={cardRef}
            style="overflow-x-auto mt-8 flex md:gap-10 gap-6 xsm:w-[98%] w-[100%] mx-auto  remove_scrollbar absolute top-0  z-0 pb-4 "
          >
            {testimonials_data?.map((item, idx) => {
              return <TestimonialCard key={idx} item={item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
