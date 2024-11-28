// components/FAQ.js
import { useState, useEffect } from "react";
import { questionsAnswers } from "../../static";
import { IoIosArrowDown as DownArrow } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [displayedText, setDisplayedText] = useState(""); // Text that is currently displayed

  useEffect(() => {
    if (activeIndex !== null) {
      const answerText = questionsAnswers[activeIndex].answer;
      setDisplayedText(answerText); // Reset text
    }
  }, [activeIndex]);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={` flex flex-col gap-2   `}>
      {questionsAnswers.map((item, index) => (
        <div
          key={index}
          className={`border border-green-100 rounded-md bg-dim_green py-4`}
        >
          <div
            className="flex justify-between items-center px-4 cursor-pointer "
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="sm:text-[18px] text-[16px] font-medium text-gray-700">
              {item.question}
            </h3>
            <span className="text-xl text-gray-500 ">
              {activeIndex === index ? (
                <DownArrow className=" rotate-180 transition-transform duration-500" />
              ) : (
                <DownArrow className="transition-transform duration-500" />
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-[max-height]  ease-in-out ${
              activeIndex === index
                ? "max-h-96 duration-[700ms]"
                : "max-h-0  duration-[300ms]"
            }`}
          >
            <p
              className={`text-gray-600 whitespace-pre-wrap px-4 pt-4 sm:text-[16px] text-[15px]  ${
                activeIndex === index
                  ? "opacity-100 visible transition-opacity duration-[600ms] ease-in-out"
                  : "opacity-0 invisible transition-opacity duration-[600ms] ease-in-out"
              }`}
            >
              {displayedText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
