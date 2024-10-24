const Card = ({ item }) => {
  return (
    <div className="bg-white flex-shrink-0 md:w-[35%] w-[80%] flex flex-col gap-2 rounded-2xl shadow-md">
      <div className="p-4 px-6">
        <p className="text-black font-bold text-[2rem]">{item.title}</p>
        <p className="text-black text-[1rem]">{item.details}</p>
      </div>
      <div className="w-[100%]">
        <img
          src={item.img}
          alt="img"
          className=" sm:object-cover w-full h-[30vh] rounded-b-2xl"
        />
      </div>
    </div>
  );
};

export default Card;
