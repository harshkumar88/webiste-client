import Navbar from "../PageComponents/Navbar";
import { boost_content } from "../static";
import CaseStudy from "../PageComponents/CaseStudy";
import Story from "../PageComponents/Story";
import Footer from "../PageComponents/Footer";
import InteractiveSection from "../PageComponents/InteractiveSection";
import BoostTrainingSection from "../PageComponents/BoostTrainingSection";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import NeedsComponent from "~/PageComponents/Needs";

const Boost = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col   remove_scrollbar sm:gap-[60px] xsm:gap-[70px] gap-[60px]">
      <Navbar />
      <BoostTrainingSection />
      <InteractiveSection show={true} />
      <CaseStudy />
      <NeedsComponent />
      <Footer rounded={true} />
    </section>
  );
};

export default Boost;
