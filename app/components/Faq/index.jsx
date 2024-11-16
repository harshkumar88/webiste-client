// components/FAQ.js
import React, { useState, useEffect } from "react";
import { questionsAnswers } from "../../static";
import { IoIosArrowDown as DownArrow } from "react-icons/io";

let clear;
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [displayedText, setDisplayedText] = useState(""); // Text that is currently displayed
  const [typing, setTyping] = useState(false); // To control if typing is in progress

  // Typing effect that streams each character of the answer

  useEffect(() => {
    if (activeIndex !== null) {
      setTyping(true);
      const answerText = questionsAnswers[activeIndex].answer;
      setDisplayedText(answerText); // Reset text
      return;
      let charIndex = -1; // Start from the first character

      const typeChar = () => {
        charIndex++;
        if (charIndex < answerText.length) {
          console.log(charIndex);
          setDisplayedText((prev) => prev + answerText[charIndex]);

          clear = setTimeout(typeChar, 30); // Adjust typing speed here
        } else {
          setTyping(false); // Typing is complete
        }
      };

      typeChar(); // Start typing effect

      return () => {
        setDisplayedText(""); // Clean up on unmount or index change
      };
    }
  }, [activeIndex]);

  const toggleAccordion = (index) => {
    clearTimeout(clear);
    setActiveIndex((prev) => (prev === index ? null : index));
    // setDisplayedText("")
  };

  return (
    <div className=" flex flex-col gap-2  ">
      {questionsAnswers.map((item, index) => (
        <div
          key={index}
          className={`border border-green-100 rounded-md bg-dim_green py-4`}
        >
          <div
            className="flex justify-between items-center px-4 cursor-pointer "
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-[0.9rem] font-medium text-gray-700">
              {item.question}
            </h3>
            <span className="text-xl text-gray-500 ">
              {activeIndex === index ? (
                <DownArrow className=" rotate-180" />
              ) : (
                <DownArrow />
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden max-w-[100%] transition-max-height duration-300 ease-in-out  ${
              activeIndex === index ? " " : "max-h-0 "
            }`}
          >
            <p className="text-gray-600 whitespace-pre-wrap px-4 pt-4 text-[0.84rem]">
              {activeIndex === index ? displayedText : null}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
