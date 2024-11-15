import type { MetaFunction } from "@remix-run/node";
import Header from "../components/Header/page";
import TrustedTargets from "../components/TrustedTargets/page";
import NeedsComponent from "../components/Needs/page";
import StateMent from "../components/Statement/page";
import Story from "../components/Story/page";
import CaseStudy from "../components/CaseStudy/page";
import Testimonials from "../components/Testimonials/page";
import Blogs from "../components/Blogs/page";
import Footer from "../components/Footer/page";
import InteractiveSection from "../components/InteractiveSection/page";
import Navbar from "../components/Header/components/Navbar/page";
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
        {/* <StateMent /> */}
        <Story />
        <Blogs />
        <CaseStudy />
        <Testimonials />
        <Footer />
      </div>
    </section>
  );
}
