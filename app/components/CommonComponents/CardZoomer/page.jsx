import React, { useEffect, useState } from "react";

const CardZoomer = (props) => {
  const { content } = props;
  const [hoveredCard, setHoveredCard] = useState(content[0]?.id);
  const [display, setDisplay] = useState(true);
  const [initial, setInital] = useState(false);

  const handleHoveredCard = () => {
    setHoveredCard(content[0]?.id);
  };

  useEffect(() => {
    handleHoveredCard();
  }, []);

  useEffect(() => {
    if (!initial) {
      setInital(true);
      return;
    }
    setDisplay(false);
    setTimeout(() => {
      setDisplay(true);
    }, [500]);
  }, [hoveredCard]);

  return (
    <div className="flex justify-center items-start gap-5">
      {content.map((card) => (
        <div
          key={card.id}
          className={`flex flex-col items-center justify-center border-none transition-all ease-in-out duration-500  cursor-pointer relative overflow-hidden ${
            hoveredCard === card.id ? "w-[60%] h-[570px]" : "w-[20%] h-[570px]"
          } `}
          style={{ borderRadius: "60px" }}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => handleHoveredCard()}
        >
          <img
            src={card.img}
            height={400}
            width={400}
            alt="content_img"
            className=" object-cover"
            style={{ width: "100%", height: "100%" }}
          />
          {hoveredCard !== card.id ? (
            <h2 className="text-[2rem] font-bold text-white -rotate-90 absolute bottom-20 left-0 right-0">
              {card.title}
            </h2>
          ) : display ? (
            <div className="absolute bottom-8 left-0 right-0  px-8">
              <h2 className="text-[3rem] font-bold text-white">{card.title}</h2>
              <p className="text-white text-[1.1rem]">{card.details}</p>
            </div>
          ) : (
            <h2 className="text-[2rem] font-bold text-white -rotate-90 absolute bottom-20 left-0 right-0">
              {card.title}
            </h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardZoomer;
