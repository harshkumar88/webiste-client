import { styles } from "../../styles";
import { footerLinks } from "../../static";
import SocialMedia from "./components/SocialMedia";
import { useState } from "react";
import FooterLink from "./components/FooterLink";

const Footer = ({ rounded }) => {
  const [isActiveIndex, setActiveIndex] = useState(0);
  const setToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className={`${
        styles.flexCenter
      } py-[70px] flex-col   lg:px-[80px] sm:px-[40px] px-[20px] mx-auto bg-green_gradient w-[100%] ${
        !rounded && "rounded-t-3xl"
      }`}
    >
      <div className="md:hidden block  w-[100%]">
        <SocialMedia />
      </div>
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 mx-auto ] w-[100%] `}
      >
        <div className="flex-[1] w-full flex sm:flex-row flex-col justify-between sm:flex-wrap md:mt-0 mt-5">
          {footerLinks.map((footerlink) => (
            <FooterLink
              key={footerlink.id}
              footerlink={footerlink}
              isActiveIndex={isActiveIndex}
              setToggle={setToggle}
            />
          ))}
        </div>
      </div>

      <div className=" flex justify-between items-center sm:flex-row flex-col gap-5 pt-[20px] border-t-[1px]  mx-auto  w-[100%] border-t-[#3F3E45]">
        <p className=" sm:text-[16px] md:text-[18px] text-[14px] leading-[27px] text-white md:w-[25%] sm:w-[35%] w-[100%] text-center sm:text-left sm:block hidden">
          A interactive training platform to upskill your workforce
        </p>
        <div className="md:block hidden">
          <SocialMedia />
        </div>

        <div className="flex flex-col   ">
          <p className=" text-center sm:text-[16px] md:text-[18px] text-[14px]  leading-[27px] text-white ">
            <span>About us</span> | <span>Privacy Policy</span> |{" "}
            <span>Terms Of Use</span>
          </p>
          <p className="text-center  sm:text-[16px] md:text-[18px] text-[14px]  leading-[27px] text-white">
            © 2022 workryt technologies private limited
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
