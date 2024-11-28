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
    <div className=" w-[100%] flex flex-shrink-0  flex-col md:flex-row items-center xsm:gap-[50px] gap-[30px] justify-between  overflow-hidden mb-[20px] ">
      <div className="flex flex-col md:w-[468px] xsm:w-[510px] w-[372px]  ">
        <div className="leading-[54px]">
          <p className="md:text-[44px] xsm:text-[42px] text-[32px] md:text-start text-center font-bold ">
            Interactive{" "}
            <span className="bg-yellow_light lg:hidden inline">Videos</span>
          </p>
          <p className="md:text-[44px] font-bold md:text-start text-center lg:block hidden">
            <span className="bg-yellow_light ">Videos</span>
          </p>
        </div>
        <p className="sm:text-[18px] text-[15px] mt-[24px] md:block hidden">
          Create videos that perform using advanced tools and techniques that
          grab attention. Create videos that perform using advanced tools and
          techniques that grab attention. Create videos that perform using.
        </p>

        <p className="sm:text-[18px] text-[15px] mt-[8px] md:hidden block md:text-start text-center w-[80%] mx-auto">
          Create videos that perform using advanced tools and techniques that
          grab attention.
        </p>
      </div>
      {/* md:w-[70%] w-[100%] */}

      <div className="md:w-[750px] lg:h-[480px]  md:h-[400px]  xsm:w-[688px] xsm:h-[510px] h-[323px] min-w-[330px]  flex lg:justify-start justify-center overflow-hidden md:p-0 relative md:rounded-tl-[50px] md:rounded-bl-[50px] ">
        {/* Image Component */}
        {show && (
          <div className="bg-green_gradient xsm:h-[200px] h-[140px] xsm:w-[50px] w-[40px]  rounded-[10px] flex flex-col gap-5 items-center justify-center  absolute xsm:top-[160px] lg:top-[150px] md:top-[110px] top-[110px] lg:left-[38px] md:left-[10px] sm:left-[30px] xsm:left-[20px] left-[5px]  z-10">
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
          </div>
        )}

        {/* Interactive Polygon Components */}
        <img src={activeContent.img} className="sm:w-[97%] w-[95%] " />

        <div className="absolute  sm:w-[70%] w-[75%] p-4 lg:bottom-[2%] md:bottom-[-4%]  sm:bottom-[3%] bottom-[-5%] lg:left-[31%]  left-[30%] ">
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
