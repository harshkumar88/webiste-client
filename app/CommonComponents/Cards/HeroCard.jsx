const HeroCard = ({ card }) => {
  return (
    <div
      className={`flex  flex-shrink-0  flex-col items-start justify-start border-none transition-all ease-in-out duration-500  cursor-pointer relative overflow-hidden  `}
      // style={{ borderRadius: "30px" }}
    >
      <img
        src={card.img}
        alt="content_img"
        className="object-cover opacity-90  sm:w-[688px] sm:h-[460px]   w-[372px] h-[270px]"
      />
      <div className="absolute bottom-0 left-0 right-0  px-8 pb-4  text-left bg-gradient-to-t from-black/70 via-black/50 to-transparent">
        <h2 className="sm:text-[54px] text-[28px] font-extrabold text-white shadow-lg">
          {card.title}
        </h2>
        <p className="text-white sm:text-[18px] text-[15px] ">{card.details}</p>
      </div>
    </div>
  );
};

export default HeroCard;
