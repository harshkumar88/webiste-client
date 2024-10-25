const NeedsCard = ({ item }) => {
  return (
    <div className="bg-white flex-shrink-0 lg:w-[35%] md:w-[50%] xsm:w-[50%] sm:w-[60%] w-[90%] flex flex-col gap-2 rounded-2xl shadow-md">
      <div className="p-4 px-6">
        <p className="text-black font-bold text-[2rem]">{item.title}</p>
        <p className="text-black text-[1rem]">{item.details}</p>
      </div>
      <div className="w-[100%]">
        <img
          src={item.img}
          alt="img"
          className="w-full h-[30vh] rounded-b-2xl"
        />
      </div>
    </div>
  );
};

export default NeedsCard;
