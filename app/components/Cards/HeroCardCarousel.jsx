const HeroCardCarousel = ({ card }) => {
  return (
    <div
      className={`flex  flex-shrink-0 flex-col items-start justify-start border-none transition-all ease-in-out duration-500  cursor-pointer relative overflow-hidden w-[100%] sm:h-[460px] h-[400px] `}
      style={{ borderRadius: "30px" }}
    >
      <img
        src={card.img}
        alt="content_img"
        className="object-cover opacity-90"
        style={{ width: "100%", height: "100%", borderRadius: "30px" }}
      />
      <div className="absolute bottom-10 left-2 right-0  px-8  text-left">
        <h2 className="text-[3rem] font-extrabold text-white shadow-lg">
          {card.title}
        </h2>
        <p className="text-white text-[1rem] ">{card.details}</p>
      </div>
    </div>
  );
};

export default HeroCardCarousel;
