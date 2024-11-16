import type { MetaFunction } from "@remix-run/node";
import Header from "../PageComponents/HeroBanner/page";
import TrustedTargets from "../PageComponents/TrustedTargets/page";
import NeedsComponent from "../PageComponents/Needs/page";
import Story from "../PageComponents/Story/page";
import CaseStudy from "../PageComponents/CaseStudy/page";
import Testimonials from "../PageComponents/Testimonials/page";
import Blogs from "../PageComponents/Blogs/page";
import Footer from "../PageComponents/Footer/page";
import InteractiveSection from "../PageComponents/InteractiveSection/page";
import Navbar from "../PageComponents/Navbar/page";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <section className="flex flex-col  remove_scrollbar">
      <Navbar />
      <Header />
      <div className="flex flex-col gap-12 sm:gap-14 mt-10  overflow-hidden">
        {/* <InteractiveSection /> */}
        <TrustedTargets />
        <NeedsComponent />
        <Story />
        <Blogs />
        <CaseStudy />
        <Testimonials />
        <Footer rounded={true} />
      </div>
    </section>
  );
}
