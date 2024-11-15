import Navbar from "../components/Header/components/Navbar/page";
import ProffesionalWrapper from "../components/ProffesionalWrapper";
import { test_content1 } from "../static";
import CaseStudy from "../components/CaseStudy/page";
import Story from "../components/Story/page";
import Footer from "../components/Footer/page";

const Test = () => {
  return (
    <section className="flex flex-col  gap-10 remove_scrollbar">
      <Navbar />
      <div className="flex flex-col gap-10 mb-10 mx-auto">
        <ProffesionalWrapper content={test_content1} reverse={1} />
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
