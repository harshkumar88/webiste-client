import { targets } from "../../static";

const TrustedTargets = () => {
  return (
    <div
      className=" md:w-[85%] w-[100%] mx-auto flex  flex-col items-center  md:hidden bg-dim_green py-8 gap-10"
      id="engage"
    >
      <p className="font-bold sm:text-[3rem] text-[2.5rem] text-center text-green_gradient">
        <span className="bg-yellow_light">Trusted</span> by
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
