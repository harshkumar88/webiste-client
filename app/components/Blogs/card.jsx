const CustomCard = ({ item }) => {
  return (
    <div className="w-[70%] sm:w-[25%] md:w-[16%] flex-shrink-0  rounded-3xl  flex flex-col gap-3  overflow-hidden">
      <img
        src={item.img}
        alt="Main Content"
        className="w-[85%] h-[55%]  rounded-md"
      />

      <div className="flex flex-col gap-2 px-3">
        <p className="text-[0.9rem] sm:text-[1rem] leading-relaxed">
          {item.date}
        </p>

        <p className="text-[0.9rem] sm:text-[1rem] leading-relaxed font-semibold">
          {item.details}
        </p>
        <p className="cursor-pointer w-fit">Read Blog {"->"}</p>
      </div>
    </div>
  );
};

export default CustomCard;
