import { useEffect, useState } from "react";
import Button from "../../CommonComponents/Button";
import { nav_links } from "../../static";
import { MdOutlineSegment as Menu } from "react-icons/md";
import { IoClose as Close } from "react-icons/io5";
import WhiteLogo from "../../assets/svg/whitelogo";
import DarkLogo from "../../assets/svg/darklogo";
import { useNavigate } from "@remix-run/react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrolling = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  const handleLogin = async () => {};
  const handleScroll = (id) => {
    navigate(id);
    return;
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop; // Get the element's position from the top
      window.scrollTo({
        top: topOffset - 30,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <section
      className={` py-2 sticky top-0  z-50 ${
        scroll
          ? "text-white bg-green_gradient "
          : "text-white bg-green_gradient"
      }`}
    >
      <div
        className={` lg:px-[80px] lg:py-[10px] sm:px-[40px] sm:py-[10px] px-[20px] py-[10px] mx-auto flex  justify-between items-center `}
      >
        <div className="flex lg:gap-[30px] sm:gap-[30px] gap-[20px] items-center ">
          <div className="xsm:hidden block" onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <Menu className={`text-3xl  text-white `} />
            ) : (
              <Close className={`text-3xl text-white `} />
            )}
          </div>

          <WhiteLogo />

          <div className="lg:gap-[30px] lg:flex hidden mt-1">
            {nav_links?.map((link, idx) => {
              return (
                <span
                  key={idx}
                  className=" cursor-pointer"
                  onClick={() => handleScroll(link.redirect)}
                >
                  {link.label}
                </span>
              );
            })}
          </div>
        </div>
        <div className="gap-[30px] flex items-center mt-1">
          <Button
            btn_type="button"
            content="Log In"
            callbackfn={handleLogin}
            btn_styles={` border border-gray-300 rounded-full  text-[16px] sm:block hidden h-[40px] w-[94px] ${
              scroll ? "bg-green_gradient  text-white" : "text-white"
            }`}
          />
          <Button
            btn_type="button"
            content="Try Chaabi for Free"
            callbackfn={handleLogin}
            btn_styles={
              "bg-yellow_light text-green_gradient border border-gray-300 rounded-full  sm:text-[16px] text-[13px] sm:h-[40px] sm:w-[194px]  w-[151px] h-[32px]  "
            }
          />
          <div
            className="lg:hidden xsm:block hidden"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <Menu className={`text-3xl  text-white`} />
            ) : (
              <Close className={` text-3xl text-white`} />
            )}
          </div>
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-[73px] xsm:right-0  xsm:left-auto left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {nav_links.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.label ? "text-dark" : "text-dark"
                } ${index === nav_links.length ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.label);
                  // handleScrollToSection(nav.id);
                }}
              >
                <span
                  className="text-black cursor-pointer"
                  onClick={() => {
                    handleScroll(nav.redirect);
                    setToggle(!toggle);
                  }}
                >
                  {nav.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
