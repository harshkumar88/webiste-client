import Navbar from "../PageComponents/Navbar";
import FaqWrapper from "../PageComponents/FaqWrapper";
import { professional_content } from "../static";
import CaseStudy from "../PageComponents/CaseStudy";
import Story from "../PageComponents/Story";
import Footer from "../PageComponents/Footer";
import InteractiveSection from "../PageComponents/InteractiveSection";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col  gap-16 remove_scrollbar">
      <Navbar />
      <FaqWrapper content={professional_content} reverse={1} />
      <CaseStudy />
      <InteractiveSection show={true} />
      <div>
        <Story />
        <Footer rounded={true} />
      </div>
    </section>
  );
};

export default Test;
