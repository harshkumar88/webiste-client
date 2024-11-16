import type { MetaFunction } from "@remix-run/node";
import Header from "../PageComponents/HeroBanner";
import TrustedTargets from "../PageComponents/TrustedTargets";
import NeedsComponent from "../PageComponents/Needs";
import Story from "../PageComponents/Story";
import CaseStudy from "../PageComponents/CaseStudy";
import Testimonials from "../PageComponents/Testimonials";
import Blogs from "../PageComponents/Blogs";
import Footer from "../PageComponents/Footer";
// import InteractiveSection from "../PageComponents/InteractiveSection";
import Navbar from "../PageComponents/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <section className="flex flex-col  remove_scrollbar">
      {/* <Navbar />
      <Header /> */}
      <div className="flex flex-col gap-12 sm:gap-14 mt-10  overflow-hidden">
        {/* <InteractiveSection /> */}
        {/* <TrustedTargets />
        <NeedsComponent />
        <Story />
        <Blogs />
        <CaseStudy />
        <Testimonials /> */}
        <Footer rounded={true} />
      </div>
    </section>
  );
}
