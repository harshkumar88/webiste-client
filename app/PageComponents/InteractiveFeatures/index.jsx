const InteractiveFeatures = () => {
  return (
    <div
      className=" w-[100%]  flex flex-col  relative  gap-12 md:flex-col-reverse  items-center  justify-between xsm:mt-5  md:mb-20"
      id="grow"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-1  md:absolute   bottom-[-40px]">
        <p className="xsm:text-[2.7rem] text-[2rem]  md:text-start text-center font-bold ">
          Interactive <span className="highlight_text_bottom">Videos</span>
        </p>

        <p className="xsm:text-[1.2rem] text-[1rem]  md:text-start text-center w-[85%] mx-auto">
          Build for Advanced Learning.
        </p>
      </div>
      {/* md:w-[70%] w-[100%] */}

      <div className="  xsm:w-[85%] w-[95%] xsm:h-[400px]  h-[280px]  flex lg:justify-start justify-center  md:p-0 relative md:rounded-tl-[50px] md:rounded-bl-[50px] ">
        {/* Interactive Polygon Components */}
        <img
          src={"/Interactive/feature_img.png"}
          className=" w-[100%] md:block hidden"
        />

        <img
          src={"/Interactive/img.png"}
          className=" w-[100%] md:hidden block"
        />

        <div className="absolute  sm:w-[60%] w-[70%] p-4 md:bottom-[1%]  sm:bottom-[-3%] bottom-[-10%] lg:left-[25%] left-[30%] xsm:hidden  block ">
          <div className="flex flex-col me-0 mx-auto  z-10  ">
            <p className=" flex items-center gap-2 text-[1.2rem]">
              <span className="font-bold sm:text-[1.3rem] text-[1.1rem]">
                One chat experience
              </span>
            </p>
            <p className="sm:text-[1rem] text-gray-500 text-[0.8rem]">
              Help people navigate through difficult parts of your video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
