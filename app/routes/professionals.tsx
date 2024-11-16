import Navbar from "../PageComponents/Navbar";
import ProfessionalWrapper from "../PageComponents/ProfessionalWrapper";
import { test_content1 } from "../static";
import CaseStudy from "../PageComponents/CaseStudy";
import Story from "../PageComponents/Story";
import Footer from "../PageComponents/Footer";

const Test = () => {
  return (
    <section className="flex flex-col  gap-10 remove_scrollbar">
      <Navbar />
      <div className="flex flex-col gap-10 mb-10 mx-auto">
        <ProfessionalWrapper content={test_content1} reverse={1} />
      </div>
      <CaseStudy />
      <div>
        <Story />
        <Footer rounded={true} />
      </div>
    </section>
  );
};

export default Test;
