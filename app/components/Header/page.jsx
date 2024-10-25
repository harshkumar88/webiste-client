import ContentBox from "./components/ContentBox/page";
import Navbar from "./components/Navbar/page";

const Header = () => {
  return (
    <header className="flex flex-col sm:gap-16 gap-5 bg-green_gradient pb-16">
      <Navbar />
      <ContentBox />
    </header>
  );
};

export default Header;
