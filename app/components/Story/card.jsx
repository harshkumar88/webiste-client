import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-[70%] flex-shrink-0 md:w-[23%] rounded-[30px] mt-0 ">
      <div className="relative w-[90%] md:w-[100%] rounded-[30px] sm:mt-28 mt-10 ">
        <div className="bg-yellow_light w-full h-[190px] rounded-t-[30px]"></div>

        <img
          src={item.img}
          alt="Card image"
          className="absolute sm:top-[-140px]  top-[-140px] left-1/2 transform -translate-x-1/2 w-[85%] h-[100%] object-contain z-0 rounded-t-[30px]"
        />

        <div className="bg-dim_yellow -mt-[80px] p-6 rounded-[30px] flex flex-col   z-10 relative">
          <p className="md:text-[2rem]">{item.title}</p>
          <p className="md:text-[2.8rem] font-bold">{item.sub_title}</p>
          <p className=" md:text-[1.6rem] text-[1.5rem] font-bold">
            {item.details}
          </p>
          <p className=" mt-2 md:text-[1.2rem]">{item.sub_details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
