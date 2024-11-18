const StateMent = ({ remove_color }) => {
  return (
    <div
      data-aos="fade-up"
      className={`md:w-[80%] w-[100%]  mx-auto md:p-0 sm:mt-10  pb-10 flex flex-col items-start justify-center relative ${
        remove_color ? "bg-white" : "bg-yellow_light"
      }`}
      style={{ borderRadius: "0px 100px 100px 0px" }}
      id="resources"
    >
      <img
        src="/Statement/img2.png"
        className="absolute top-5 md:-left-24 sm:left-10 xsm:left-2 left-5 xsm:w-auto w-10"
      />
      <div className="sm:text-[1.6rem] text-[1.1rem] md:w-[60%] w-[60%] md:mx-0 mx-auto  md:text-start text-center sm:py-12 pt-7 ">
        I never teach my pupils, I only attempt to provide the conditions in
        which they can learn.{" "}
        <p className="mt-2 sm:text-[2rem] text-[1.4rem] font-bold">
          — Albert Einstein
        </p>
      </div>

      <img
        src="/Statement/img1.png"
        className="absolute bottom-5 md:left-[45%] sm:right-10 xsm:right-2  right-5 xsm:w-auto w-10"
      />
    </div>
  );
};

export default StateMent;
