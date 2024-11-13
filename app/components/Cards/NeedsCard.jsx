const NeedsCard = ({ item }) => {
  return (
    <div className="bg-white flex-shrink-0 lg:w-[32.4%]  sm:w-[42%] w-[80%] flex flex-col rounded-3xl shadow-md h-[330px] overflow-hidden">
      <div className="pt-4 px-6">
        <p className="text-black font-bold sm:text-[1.8rem] text-[1.7rem]">
          {item.title}
        </p>
        <p className="text-black text-[0.9rem]">{item.details}</p>
      </div>
      <img
        src={item.img}
        alt="img"
        className="w-[100%]  h-[430px] object-cover rounded-b-2xl"
      />
    </div>
  );
};

export default NeedsCard;
