import React from "react";
import Navbar from "./Navbar/page";
import ContentBox from "./components/ContentBox/page";

const Header = () => {
  return (
    <header className="flex flex-col sm:gap-16 gap-5 bg-green_gradient pb-16">
      <Navbar />
      <ContentBox />
    </header>
  );
};

export default Header;
