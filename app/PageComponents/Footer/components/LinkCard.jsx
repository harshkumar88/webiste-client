import { useState } from "react";
import { IoIosArrowDown as DownArrow } from "react-icons/io";

const LinkCard = ({ footerlink }) => {
  const [isActive, setActive] = useState(false);
  const setToggle = () => {
    setActive(!isActive);
  };
  return (
    <div
      key={footerlink.title}
      className={`flex flex-col ss:my-0 my-4 min-w-[120px]`}
    >
      <div
        className="flex justify-between sm:cursor-default cursor-pointer"
        onClick={setToggle}
      >
        <h4 className="font-poppins text-[18px] leading-[27px]  text-white font-semibold">
          {footerlink.title}
        </h4>
        <DownArrow className="sm:hidden block text-white" />
      </div>

      <ul className={`list-none mt-4 ${!isActive && "sm:block hidden"}`}>
        {footerlink.links.map((link, index) => (
          <li
            key={link.name}
            className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
              index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
            }`}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkCard;
