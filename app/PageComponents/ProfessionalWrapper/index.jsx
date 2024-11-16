import React from "react";
import FAQ from "../Faq";

const ProfessionalWrapper = ({ content, reverse }) => {
  return (
    <div className="flex flex-col gap-20">
      {content?.map((item, idx) => {
        return (
          <div
            className={`w-[90%]  mx-auto flex justify-between items-center  gap-16 md:flex-row  flex-col-reverse  ${
              (reverse + idx) % 2 != 0 ? "md:flex-row-reverse" : ""
            }`}
            key={idx}
          >
            {item.switch ? (
              <div className=" md:w-[50%]  sm:w-[80%] w-[100%]  rounded-[20px ">
                <div className="md:w-[300px] rounded-[20px] h-[350px] overflow-hidden mx-auto">
                  {" "}
                  <img
                    src={item.img}
                    className=" object-cover md:w-[100%]  w-[100%] rounded-[20px]"
                  />
                </div>
              </div>
            ) : (
              <div className=" md:w-[50%] mx-auto  w-[100%]  ">
                <FAQ />
              </div>
            )}
            <div className="md:w-[50%] w-[100%]  flex flex-col gap-3 md:text-start text-center ">
              <p className="font-bold sm:text-[2.7rem] xs:text-[2.5rem] text-[2rem] ">
                {item.title}
              </p>
              <p className=" sm:text-[1rem] w-[100%] xsm:text-[1rem] text-[0.9rem] md:text-justify text-center">
                {item.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfessionalWrapper;
