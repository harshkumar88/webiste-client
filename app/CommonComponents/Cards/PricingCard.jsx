const PricingCard = ({ plan }) => {
  return (
    <div>
      <div
        className={`h-[35px] mx-auto w-[75%] flex items-center justify-center transform  bg-light_green text-green_gradient text-xs font-semibold px-3 py-1 z-0 rounded-t-[20px] ${
          plan.mostPopular ? "visible" : "invisible"
        }`}
      >
        Most Popular
      </div>

      <div
        className={`border px-[16px] py-[24px] rounded-[20px] flex flex-col gap-[20px]  relative  z-40 ${
          plan.highlighted ? "bg-green-50 border-light_green" : "bg-white"
        }`}
      >
        <div>
          <h3 className="text-[22px] font-bold">{plan.title}</h3>
          <p className="text-[12px] text-gray-500 bg-green-50 w-fit">
            {plan.subtitle}
          </p>
        </div>
        <div>
          <h4 className=" font-semibold  flex items-baseline gap-0">
            <span className="text-[33px]">{plan.price}</span>
            {plan.time && (
              <span className="font-normal text-[23px]">/{plan.time}</span>
            )}
          </h4>
          <p className="text-[13px] text-gray-400">{plan.note}</p>
        </div>
        <button
          className={`py-[5px] px-[12px] rounded-[20px] w-[100%] text-[16px] ${
            plan.highlighted
              ? "bg-green_gradient text-light_green border-none"
              : "border-gray-300 border"
          }`}
        >
          {plan.buttonText}
        </button>

        <p className="text-[12px]">{plan.description}</p>

        <div className="flex flex-col gap-[10px]">
          <p className="text-[16px] ">Features</p>
          <ul className=" space-y-1">
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-[14px] gap-[10px] font-light"
              >
                <span> ✅</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
