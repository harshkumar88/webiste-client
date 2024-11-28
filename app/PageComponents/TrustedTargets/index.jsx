import { targets } from "../../static";

const TrustedTargets = () => {
  return (
    <div
      className=" md:w-[100%] w-[100%] mx-auto flex  flex-col items-center  lg:bg-white bg-dim_green py-8 gap-10"
      data-aos="fade-up"
    >
      <p className="font-bold text-[44px] text-center text-green_gradient">
        <span className="bg-yellow_light">Trusted</span> by
        <span className="lg:inline hidden"> well known companies</span>
      </p>
      <div className="flex gap-7 overflow-x-auto remove_scrollbar w-[90%]">
        {targets.map((item, idx) => {
          return (
            <img
              src={item.img}
              key={idx}
              className="object-contain sm:w-[200px] w-[120px]"
              alt="img"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrustedTargets;
