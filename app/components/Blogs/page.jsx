import { slideLeft, slideRight } from "../../Handlers/commonhandlers";
import { useRef, useState } from "react";

import { blog_data } from "../../static";
import Slider from "../CommonComponents/Slider/page";
import BlogCard from "../Cards/BlogCard";

const Blogs = () => {
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
      className="flex flex-col gap-5 mx-auto sm:mt-4   w-[100%] mt-5"
      id="prices"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-[90%] mx-auto">
        <div className="flex flex-col gap-2 w-[100%] sm:w-[80%] text-center mx-auto">
          <p className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-black font-bold">
            Read Our Blogs
          </p>
          <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-black sm:w-[100%] w-[100%]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
        {/* <div className="flex gap-4 justify-start sm:justify-end w-full sm:w-[50%] mt-3">
          <IoMdArrowBack
            size={30}
            className={`cursor-pointer text-white ${
              !left ? "opacity-50 cursor-not-allowed" : ""
            } border border-white transition duration-300 rounded-full p-1`}
            onClick={() => slideLeft(left, cardRef)}
          />
          <IoMdArrowForward
            size={30}
            className={`cursor-pointer text-white ${
              !right ? "opacity-50 cursor-not-allowed" : ""
            } border border-white transition duration-300 rounded-full p-1`}
            onClick={() => slideRight(right, cardRef)}
          />
        </div> */}
      </div>
      <Slider
        checkScroll={checkScroll}
        cardRef={cardRef}
        style="overflow-x-auto mt-8 flex md:gap-10 gap-4 w-[90%]  mx-auto remove_scrollbar"
      >
        {blog_data?.map((item, idx) => {
          return <BlogCard key={idx} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default Blogs;
