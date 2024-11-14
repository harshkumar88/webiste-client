import Navbar from "../components/Header/components/Navbar/page";
import FeaturesWrapper from "../components/FeaturesWrapper";
import StateMent from "../components/Statement/page";
import { Feauters_content1, Feauters_content2 } from "../static";
import CaseStudy from "../components/CaseStudy/page";
import Story from "../components/Story/page";
import NeedsComponent from "../components/Needs/page";
import Footer from "../components/Footer/page";

const Home = () => {
  return (
    <section className="flex flex-col  gap-10 remove_scrollbar">
      <Navbar />
      <div className="flex flex-col gap-10 mb-10">
        <FeaturesWrapper content={Feauters_content1} reverse={0} />
        <StateMent remove_color="true" />{" "}
        <FeaturesWrapper content={Feauters_content2} reverse={1} />
      </div>
      <CaseStudy /> <Story />
      <NeedsComponent />
      <Footer />
    </section>
  );
};

export default Home;
