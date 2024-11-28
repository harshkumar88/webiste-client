const StoryCard = ({ item }) => {
  return (
    <div className="flex-shrink-0  w-[300px]  rounded-[30px] h-[340px] flex flex-col justify-end ">
      <div className="relative w-[100%] rounded-[30px] ">
        <div className="bg-yellow_light w-full h-[180px] rounded-t-[30px]"></div>

        <img
          src={item.img}
          alt="Card image"
          className="absolute top-[-90px] left-1/2 transform -translate-x-1/2  h-[100%] w-[272px] z-0 rounded-t-[30px]"
        />

        <div className="bg-dim_yellow -mt-[80px] p-4 rounded-[30px] flex flex-col gap-2 w-[300px] h-[146px]   z-10 relative">
          <p className=" text-[24px]  font-bold">{item.details}</p>
          <p className="  text-[14px] leading-[22px]">{item.sub_details}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
