import FAQ from "../Faq";

const FaqWrapper = ({ content, reverse }) => {
  return (
    <div className="flex flex-col gap-20 md:px-[80px] xsm:px-[40px] px-[20px]">
      {content?.map((item, idx) => {
        return (
          <div
            className={`w-[100%]  mx-auto flex justify-between   gap-16 md:flex-row  flex-col-reverse  ${
              (reverse + idx) % 2 != 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
            key={idx}
          >
            {item.switch ? (
              <div className=" w-[100%]  rounded-[20px ">
                <div className="md:w-[300px] rounded-[20px] h-[350px] overflow-hidden mx-auto">
                  {" "}
                  <img
                    src={item.img}
                    className=" object-cover  w-[100%] rounded-[20px]"
                  />
                </div>
              </div>
            ) : (
              <div className=" md:w-[50%] mx-auto  w-[100%] h-[300px]  ">
                <FAQ />
              </div>
            )}
            <div className="md:w-[50%] w-[100%]  flex flex-col gap-3 md:text-start text-center  ">
              <p className="font-bold sm:text-[44px] xsm:text-[42px] text-[32px] ">
                {item.title}
              </p>
              <p className=" w-[100%] sm:text-[16px] xsm:text-[16px] text-[15px] md:text-justify text-center">
                {item.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqWrapper;
