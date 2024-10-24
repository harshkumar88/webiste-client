import type { MetaFunction } from "@remix-run/node";
import Header from "../components/Header/page";
import TrustedTargets from "../components/TrustedTargets/page";
import NeedsComponent from "../components/NeedsComponent/page";
import StateMent from "../components/Statement/page";
import Story from "../components/Story/page";
import CaseStudy from "../components/CaseStudy/page";
import Testimonials from "../components/Testimonials/page";
import Blogs from "../components/Blogs/page";
import Footer from "../components/Footer/page";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <section className="flex flex-col gap-16  overflow-hidden">
      <Header />
      <TrustedTargets />
      <NeedsComponent />
      <StateMent />
      <Story />
      <CaseStudy />
      <Testimonials />
      <Blogs />
      <Footer />
    </section>
  );
}
