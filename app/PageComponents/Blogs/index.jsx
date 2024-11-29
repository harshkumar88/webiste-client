import { slideLeft, slideRight } from "../../Handlers/commonhandlers";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { blog_data } from "../../static";
import Slider from "../../CommonComponents/Slider";
import BlogCard from "../../CommonComponents/Cards/BlogCard";

const Blogs = () => {
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
      data-aos="fade-up"
      className="flex flex-col gap-[60px] mx-auto  w-[100%] md:px-[80px] xsm:px-[40px] px-[20px]  overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row justify-between items-baseline w-[100%] mx-auto">
        <div className="flex flex-col gap-2 w-[100%]  md:w-[90%] lg:w-[45%]">
          <p className="text-[32px] sm:text-[42px]  md:text-[44px]  font-bold md:text-start text-center">
            Read Our{" "}
            <span className="bg-yellow_light px-2 text-[32px] sm:text-[42px]  md:text-[44px]">
              Blogs
            </span>
          </p>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] sm:w-[98%] w-[100%] md:text-start text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div className="md:flex hidden gap-4 justify-end w-full sm:w-[50%]  ">
          <IoMdArrowBack
            size={40}
            className={`cursor-pointer text-black ${
              !left ? "opacity-50 cursor-not-allowed" : ""
            } border border-black transition duration-300 rounded-full p-1`}
            onClick={() => slideLeft(left, cardRef, 5, 27)}
          />
          <IoMdArrowForward
            size={40}
            className={`cursor-pointer text-black ${
              !right ? "opacity-50 cursor-not-allowed" : ""
            } border border-black transition duration-300 rounded-full p-1`}
            onClick={() => slideRight(right, cardRef, 5, 27)}
          />
        </div>
      </div>
      <Slider
        checkScroll={checkScroll}
        cardRef={cardRef}
        style=" overflow-x-auto flex gap-[27px] w-[100%] mx-auto remove_scrollbar "
      >
        {blog_data?.map((item, idx) => {
          return <BlogCard key={idx} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default Blogs;
