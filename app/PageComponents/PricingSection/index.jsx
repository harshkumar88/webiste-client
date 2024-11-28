import { pricing_content } from "../../static";
import PricingCard from "../../CommonComponents/Cards/PricingCard";
const PricingSection = () => {
  return (
    <div className="flex flex-col xsm:gap-[60px] gap-[30px] w-[100%]">
      <div className="flex flex-col  gap-[10px] lg:px-[80px] sm:px-[40px] px-[20px]">
        <p className="font-bold lg:text-[44px] sm:text-[42px] text-[32px] text-center leading-[42px]">
          Choose the right plan for you
        </p>
        <p className="lg:text-[18px] sm:text-[16px] text-[14px] text-center  lg:w-[45%] sm:w-[80%] mx-auto leading-[22px]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 gap-[24px] lg:px-[80px] sm:px-[40px] px-[20px]">
        {pricing_content.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
