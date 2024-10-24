import React, { useRef, useState } from "react";
import Slider from "../CommonComponents/Slider/page";
import { need_slider_data } from "../../static";
import Card from "./card";

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
    <div className="w-[93%] ml-auto flex flex-col md:flex-row items-center gap-20 justify-between md:mt-5 ">
      <div className="flex flex-col md:w-[30%] w-[90%]">
        <p className="text-[2.5rem]">Let’s talk about</p>
        <p className="md:text-[3.5rem] text-[3rem] font-bold">Your Needs</p>
        <p className="text-[1rem] mt-4">
          Say NO to boring videos and create interesting, interactive, creative
          videos that boost performance. Say NO to boring videos and create
          interesting, interactive, creative videos that boost performance.
        </p>
      </div>
      <div
        className="md:w-[70%] w-[100%] bg-yellow_light   flex justify-end overflow-x-auto md:p-0 "
        style={{ borderRadius: "50px 0 0 50px" }}
      >
        <div className="my-auto md:ps-10 ps-4 py-7 w-[100%] md:w-auto">
          <Slider
            checkScroll={checkScroll}
            cardRef={cardRef}
            style={
              "flex sm:gap-7 gap-4 overflow-x-auto mx-auto w-[100%]  remove_scrollbar"
            }
          >
            {need_slider_data.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NeedsComponent;
