import React from "react";
import Button from "../CommonComponents/Button";
import { nav_links } from "../static";

const Navbar = () => {
  const handleLogin = async () => {
    "use server";
  };
  return (
    <section className="px-5 py-4 w-[90%] mx-auto flex  justify-between">
      <div className="flex gap-5">
        <strong className="text-white">Chaabi</strong>
        <div className="flex  gap-5">
          {nav_links?.map((link, idx) => {
            return (
              <span key={idx} className="text-white">
                {link.label}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex gap-5">
        <Button
          btn_type="button"
          content="Log In"
          callbackfn={handleLogin}
          btn_styles={"text-white  border-gray-300"}
        />
        <Button
          btn_type="button"
          content="Try Chaabi for Free"
          callbackfn={handleLogin}
          btn_styles={
            "text-white border border-gray-300 rounded-full px-3 py-1 hover:bg-white hover:text-green_gradient transition duration-500"
          }
        />
      </div>
    </section>
  );
};

export default Navbar;
