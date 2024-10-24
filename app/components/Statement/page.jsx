const StateMent = () => {
  return (
    <div
      className="md:w-[60%] w-[100%] bg-yellow_light md:p-0 sm:mt-10 flex flex-col items-center justify-center relative"
      style={{ borderRadius: "0px 100px 100px 0px" }}
      id="resources"
    >
      <img src="/Statement/img2.png" className="absolute -top-8 left-10" />
      <div className="sm:text-[1.8rem] text-[1.2rem] w-[75%]  py-12">
        I never teach my pupils, I only attempt to provide the conditions in
        which they can learn.{" "}
        <p className="mt-2 sm:text-[2rem] text-[1.5rem] font-bold">
          — Albert Einstein
        </p>
      </div>

      <img src="/Statement/img1.png" className="absolute -bottom-8 right-20" />
    </div>
  );
};

export default StateMent;
