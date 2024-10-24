import React, { useState } from "react";
import Button from "../../CommonComponents/Button";
import NavMenu from "../../../assets/menu";
import { Link } from "@remix-run/react";
import { nav_links } from "../../../static";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

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
    <section className="px-5 py-4 md:w-[85%] w-[95%] mx-auto flex  justify-between items-center">
      <div className="flex gap-7 items-center">
        <strong className="text-white text-2xl font-bold">Chaabi</strong>
        <div className="gap-5 md:flex hidden ">
          {nav_links?.map((link, idx) => {
            return (
              <span
                key={idx}
                className="text-white cursor-pointer"
                onClick={() => handleScroll(link.redirect)}
              >
                {link.label}
              </span>
            );
          })}
        </div>
      </div>
      <div className="hidden gap-5 md:flex">
        <Button
          btn_type="button"
          content="Log In"
          callbackfn={handleLogin}
          btn_styles={
            "text-white border border-gray-300 rounded-full sm:px-6 sm:py-2 text-[1rem]"
          }
        />
        <Button
          btn_type="button"
          content="Try Chaabi for Free"
          callbackfn={handleLogin}
          btn_styles={
            "bg-yellow_light text-green_gradient border border-gray-300 rounded-full sm:px-4 sm:py-2"
          }
        />
      </div>
      <div className="md:hidden block" onClick={() => setToggle(!toggle)}>
        <NavMenu />
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
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
    </section>
  );
};

export default Navbar;
