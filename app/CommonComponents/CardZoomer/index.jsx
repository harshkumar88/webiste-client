import { useEffect, useState } from "react";

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
    <div className="flex justify-center items-start gap-[20px]">
      {content.map((card) => (
        <div
          key={card.id}
          className={`flex flex-col items-center justify-center border-none transition-all ease-in-out duration-[800ms]  cursor-pointer relative overflow-hidden ${
            hoveredCard === card.id
              ? "w-[480px] h-[480px]"
              : "w-[120px] h-[480px]"
          } `}
          style={{ borderRadius: "70px" }}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => handleHoveredCard()}
        >
          <img
            src={card.img}
            alt="content_img"
            className="object-cover "
            style={{ height: "100%", width: "100%" }}
          />
          {hoveredCard !== card.id ? (
            <h2 className="sm:text-[28px] font-bold text-white -rotate-90 absolute bottom-20 left-0 right-0">
              {card.title}
            </h2>
          ) : (
            <>
              <div
                className={`absolute bottom-0 left-0 right-0 px-8 py-5 bg-gradient-to-t from-black/70 via-black/50 to-transparent w-full transition ease-in-out duration-500 ${
                  display ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <h2 className="sm:text-[54px] text-[28px] font-bold text-white">
                  {card.title}
                </h2>
                <p className="text-white sm:text-[18px] text-[15px] w-[350px]">
                  {card.details}
                </p>
              </div>

              <h2
                className={`sm:text-[28px] font-bold text-white -rotate-90 absolute bottom-20 left-0 right-0 ${
                  !display ? "block" : "hidden"
                }`}
              >
                {card.title}
              </h2>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardZoomer;
