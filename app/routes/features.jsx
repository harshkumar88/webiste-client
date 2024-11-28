import Navbar from "../PageComponents/Navbar";
import FeaturesWrapper from "../PageComponents/FeaturesWrapper";
import StateMent from "../PageComponents/Statement";
import { Feauters_content1, Feauters_content2 } from "../static";
import CaseStudy from "../PageComponents/CaseStudy";
import Story from "../PageComponents/Story";
import NeedsComponent from "../PageComponents/Needs";
import Footer from "../PageComponents/Footer";
import InteractiveFeatures from "../PageComponents/InteractiveFeatures";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col  sm:gap-[40px] xsm:gap-[70px] gap-[60px] remove_scrollbar">
      <Navbar />
      <InteractiveFeatures />
      <FeaturesWrapper content={Feauters_content1} reverse={0} />
      <StateMent remove_color="true" />
      <FeaturesWrapper content={Feauters_content2} reverse={1} />

      <CaseStudy />
      <Story />
      <NeedsComponent />
      <Footer rounded={true} />
    </section>
  );
};

export default Home;
