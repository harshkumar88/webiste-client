import { useEffect, useState } from "react";
import Button from "../../CommonComponents/Button";
import { nav_links } from "../../static";
import { MdOutlineSegment as Menu } from "react-icons/md";
import { IoClose as Close } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      if (window.scrollY > 0) {
        console.log("js");
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
          ? "bg-white text-green_gradient border border-1 shadow-lg border-b-green_gradient"
          : "text-white bg-green_gradient"
      }`}
    >
      <div
        className={`px-5 py-2 md:w-[85%] w-[100%] mx-auto flex  justify-between items-center `}
      >
        <div className="flex gap-3 items-center">
          <div className="xsm:hidden block" onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <Menu
                className={`text-3xl  ${scroll ? "text-black" : "text-white"}`}
              />
            ) : (
              <Close
                className={` text-3xl ${scroll ? "text-black" : "text-white"}`}
              />
            )}
          </div>
          <strong className=" text-2xl font-bold">
            Chaab<span className="font-extrabold text-[1.7rem]">i</span>
          </strong>{" "}
          <div className="gap-5 lg:flex hidden ">
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
        <div className="gap-5 flex items-center">
          <Button
            btn_type="button"
            content="Log In"
            callbackfn={handleLogin}
            btn_styles={` border border-gray-300 rounded-full sm:px-6 sm:py-1 text-[1rem] sm:block hidden ${
              scroll ? "bg-green_gradient  text-white" : "text-white"
            }`}
          />
          <Button
            btn_type="button"
            content="Try Chaabi for Free"
            callbackfn={handleLogin}
            btn_styles={
              "bg-yellow_light text-green_gradient border border-gray-300 rounded-full xsm:px-4 xsm:py-1  px-3 py-1"
            }
          />
          <div
            className="lg:hidden xsm:block hidden"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <Menu
                className={`text-3xl  ${scroll ? "text-black" : "text-white"}`}
              />
            ) : (
              <Close
                className={` text-3xl ${scroll ? "text-black" : "text-white"}`}
              />
            )}
          </div>
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 xsm:right-0  xsm:left-auto left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
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
