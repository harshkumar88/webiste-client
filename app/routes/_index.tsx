import type { MetaFunction } from "@remix-run/node";
import TrustedTargets from "../PageComponents/TrustedTargets";
import NeedsComponent from "../PageComponents/Needs";
import Story from "../PageComponents/Story";
import CaseStudy from "../PageComponents/CaseStudy";
import Testimonials from "../PageComponents/Testimonials";
import Blogs from "../PageComponents/Blogs";
import Footer from "../PageComponents/Footer";
import InteractiveSection from "../PageComponents/InteractiveSection";
import Navbar from "../PageComponents/Navbar";
import HeroBanner from "../PageComponents/HeroBanner";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Chaabi" },
    { name: "description", content: "Welcome to Chaabi!" },
  ];
};

export default function Index() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col  remove_scrollbar">
      <Navbar />
      <HeroBanner />
      <div className="flex flex-col gap-12 sm:gap-14 mt-10  overflow-hidden">
        <InteractiveSection />
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
