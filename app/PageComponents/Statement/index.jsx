const StateMent = ({ remove_color }) => {
  return (
    <div
      data-aos="fade-up"
      className={`md:px-[80px] xsm:px-[40px] px-[20px] w-[80%]   mx-auto   flex flex-col items-start justify-center relative ${
        remove_color ? "bg-white" : "bg-yellow_light"
      }`}
      style={{ borderRadius: "0px 100px 100px 0px" }}
    >
      <img
        src="/Statement/img2.png"
        className="absolute top-5 md:left-0 sm:left-[-30px] xsm:left-2 left-[-25px] xsm:w-auto w-10"
      />
      <div className="sm:text-[38px] xsm:text-[24px] text-[21px] md:w-[80%] w-[100%] md:mx-0 mx-auto  md:text-start text-center sm:py-12 pt-7 ">
        I never teach my pupils, I only attempt to provide the conditions in
        which they can learn.{" "}
        <p className="mt-2 sm:text-[16px] text-[14px] font-bold">
          — Albert Einstein
        </p>
      </div>

      <img
        src="/Statement/img1.png"
        className="absolute bottom-5 md:right-[25%] sm:right-[20px]  xsm:right-2  right-5 xsm:w-auto w-10"
      />
    </div>
  );
};

export default StateMent;
