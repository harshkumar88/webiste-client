import React from "react";
import Slider from "../CommonComponents/Caraousel/page";
import { card_content } from "../static";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="w-[50%] mx-auto">
      <Slider>
        {card_content?.map((item, idx) => {
          return (
            <div className=" border-t-2 h-[30vh] mx-auto" key={idx}>
              <span>{item?.name}</span>
              <Image
                src={item?.img}
                alt="img"
                // loading="lazy"
                priority
                height={300}
                width={800}
                style={{ width: "100%", height: "auto" }} // Maintain aspect ratio
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Cards;
