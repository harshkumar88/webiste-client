import { useEffect, useState } from "react";
import AnimatedVideoIcon from "../../../assets/svg/animatedVideo";
import CameraIcon from "../../../assets/svg/camera";
import PalleteIcon from "../../../assets/svg/palette";
import ActiveanimatedIcon from "../../../assets/svg/activeanimatedVideo";
import ActiveCameraIcon from "../../../assets/svg/activecamera";
import ActivePalleteIcon from "../../../assets/svg/activepalette";

const SectionCard = ({ show, item }) => {
  const [activeContent, setActiveContent] = useState(item.data[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveContent(item.data[0]);
    setActiveIndex(0);
  }, []);

  const handleClick = (id) => {
    setActiveIndex(id);
    setActiveContent(item.data[id]);
  };

  return (
    <div className=" w-[100%] ml-auto flex flex-shrink-0  flex-col md:flex-row items-center xsm:gap-10 gap-4 justify-between  overflow-hidden ">
      <div className="flex flex-col md:w-[30%] w-[90%]">
        <p className="text-[2.5rem] md:text-start text-center lg:font-normal font-bold ">
          Interactive{" "}
          <span className="highlight_text_bottom lg:hidden inline">Videos</span>
        </p>
        <p className="md:text-[3.5rem] text-[3rem] font-bold md:text-start text-center lg:block hidden">
          <span className="highlight_text_bottom">Videos</span>
        </p>
        <p className="text-[1rem] mt-4 md:block hidden">
          Create videos that perform using advanced tools and techniques that
          grab attention. Create videos that perform using advanced tools and
          techniques that grab attention. Create videos that perform using.
        </p>

        <p className="text-[1rem] mt-4 md:hidden block md:text-start text-center w-[80%] mx-auto">
          Create videos that perform using advanced tools and techniques that
          grab attention.
        </p>
      </div>
      {/* md:w-[70%] w-[100%] */}

      <div className="md:w-[60%]  sm:w-[85%] w-[95%] xsm:h-[430px] h-[280px]  flex lg:justify-start justify-center overflow-hidden md:p-0 relative md:rounded-tl-[50px] md:rounded-bl-[50px] ">
        {/* Image Component */}
        {show && (
          <div className="bg-green_gradient xsm:h-[200px] h-[140px] xsm:w-[50px] w-[40px]  rounded-[50px] flex flex-col gap-5 items-center justify-center  absolute xsm:top-[150px]  top-[100px] lg:left-[28px] md:left-[20px] sm:left-[18px] left-[2px]  z-10">
            <span
              onClick={() => handleClick(0)}
              className="cursor-pointer xsm:w-[34px] w-[24px]"
            >
              {activeIndex == 0 ? (
                <ActiveanimatedIcon />
              ) : (
                <AnimatedVideoIcon />
              )}
            </span>
            <span
              onClick={() => handleClick(1)}
              className="cursor-pointer xsm:w-[34px]  w-[24px]"
            >
              {activeIndex == 1 ? <ActivePalleteIcon /> : <PalleteIcon />}
            </span>
            <span
              onClick={() => handleClick(2)}
              className="cursor-pointer xsm:w-[34px]  w-[24px]"
            >
              {activeIndex == 2 ? <ActiveCameraIcon /> : <CameraIcon />}
            </span>
            {/* <img
              src="/Interactive/animated_images.png"
              className="xsm:w-[30px] w-[20px] cursor-pointer border-red-50"
              onClick={() => handleClick(0)}
            /> */}
            {/* <img
              src="/Interactive/palette.png"
              className="xsm:w-[30px] w-[20px] cursor-pointer text-white "
              onClick={() => handleClick(0)}
            /> */}
            {/* <img
              src="/Interactive/camera_video.png"
              className="xsm:w-[30px] w-[20px] cursor-pointer "
             onClick={() => handleClick(0)}
            /> */}
          </div>
        )}

        {/* Interactive Polygon Components */}
        <img src={activeContent.img} className="object-contain " />

        <div className="absolute  sm:w-[60%] w-[70%] p-4 md:bottom-[1%]  sm:bottom-[-3%] bottom-[-5%] lg:left-[25%] left-[30%] ">
          <div className="flex flex-col me-0 mx-auto  z-10  ">
            <p className=" flex items-center gap-2 text-[1.2rem]">
              <span className="font-bold sm:text-[1.3rem] text-[1.1rem]">
                {activeContent.label}
              </span>
            </p>
            <p className="sm:text-[1rem] text-gray-500 text-[0.8rem]">
              {activeContent.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
