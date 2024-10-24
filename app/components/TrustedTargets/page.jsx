import { targets } from "../../static";

const TrustedTargets = () => {
  return (
    <div
      className=" sm:w-[85%] w-[90%] mx-auto flex  flex-col items-center gap-5"
      id="engage"
    >
      <p className="font-bold sm:text-[3rem] text-[1.5rem] text-center text-green_gradient">
        Trusted by well known companies
      </p>
      <div className="flex gap-7 overflow-x-auto remove_scrollbar w-[90%]">
        {targets.map((item, idx) => {
          return (
            <img
              src={item.img}
              key={idx}
              height={100}
              width={200}
              style={{ width: "100%", height: "auto" }}
              alt="img"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrustedTargets;
