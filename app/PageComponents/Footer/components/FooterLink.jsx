import { IoIosArrowDown as DownArrow } from "react-icons/io";

const FooterLink = ({ footerlink, isActiveIndex, setToggle }) => {
  const checkToggle = () => {
    return isActiveIndex == footerlink.id;
  };
  return (
    <div className={`flex flex-col ss:my-0 my-4 min-w-[120px]`}>
      <div
        className="flex justify-between sm:cursor-default cursor-pointer"
        onClick={() => setToggle(footerlink.id)}
      >
        <h4 className="font-poppins text-[18px] leading-[27px]  text-white font-semibold">
          {footerlink.title}
        </h4>
        <DownArrow className="sm:hidden block text-white" />
      </div>

      <ul
        className={`list-none mt-4 ${
          checkToggle() ? "sm:hidden block" : "hidden sm:block"
        }`}
      >
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

export default FooterLink;
