import Navbar from "../PageComponents/Navbar";
import Footer from "../PageComponents/Footer";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";
import PricingSection from "../PageComponents/PricingSection";

const Pricing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col  sm:gap-[40px] xsm:gap-[70px] gap-[60px] remove_scrollbar">
      <Navbar />
      <PricingSection />
      <Footer rounded={true} />
    </section>
  );
};

export default Pricing;
