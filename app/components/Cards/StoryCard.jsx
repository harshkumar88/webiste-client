const StoryCard = ({ item }) => {
  return (
    <div className="flex-shrink-0  xl:w-[280px] xsm:w-[270px] w-[250px]  rounded-[30px] h-[400px] flex flex-col justify-end ">
      <div className="relative w-[100%] rounded-[30px]">
        <div className="bg-yellow_light w-full h-[150px] rounded-t-[30px]"></div>

        <img
          src={item.img}
          alt="Card image"
          className="absolute  top-[-120px] left-1/2 transform -translate-x-1/2 w-[85%] h-[100%] object-contain z-0 rounded-t-[30px]"
        />

        <div className="bg-dim_yellow -mt-[80px] p-6 rounded-[30px] flex flex-col   z-10 relative">
          {/* <p className="md:text-[2rem]">{item.title}</p>
          <p className="md:text-[2.8rem] font-bold">{item.sub_title}</p> */}
          <p className=" md:text-[1.6rem] text-[1.3rem] font-bold">
            {item.details}
          </p>
          <p className=" mt-2 md:text-[1.2rem]">{item.sub_details}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
