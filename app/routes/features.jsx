import Navbar from "../PageComponents/Navbar/page";
import FeaturesWrapper from "../PageComponents/FeaturesWrapper";
import StateMent from "../PageComponents/Statement/page";
import { Feauters_content1, Feauters_content2 } from "../static";
import CaseStudy from "../PageComponents/CaseStudy/page";
import Story from "../PageComponents/Story/page";
import NeedsComponent from "../PageComponents/Needs/page";
import Footer from "../PageComponents/Footer/page";

const Home = () => {
  return (
    <section className="flex flex-col  gap-10 remove_scrollbar">
      <Navbar />
      <div className="flex flex-col gap-10 mb-10 mx-auto">
        <FeaturesWrapper content={Feauters_content1} reverse={0} />
        <StateMent remove_color="true" />{" "}
        <FeaturesWrapper content={Feauters_content2} reverse={1} />
      </div>
      <CaseStudy />
      <Story />
      <NeedsComponent />
      <Footer />
    </section>
  );
};

export default Home;
