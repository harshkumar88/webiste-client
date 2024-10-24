import React from "react";

const CustomCard = ({ card }) => {
  return (
    <div
      className={`flex  flex-shrink-0 flex-col items-center justify-center border-none transition-all ease-in-out duration-500  cursor-pointer relative overflow-hidden ${"w-[90%] h-[300px]"} `}
      style={{ borderRadius: "60px" }}
    >
      <img
        src={card.img}
        height={400}
        width={400}
        alt="content_img"
        className=" "
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute bottom-8 left-0 right-0  px-8">
        <h2 className="text-[2rem] font-bold text-white">{card.title}</h2>
        <p className="text-white text-[1rem]">{card.details}</p>
      </div>
    </div>
  );
};

export default CustomCard;
