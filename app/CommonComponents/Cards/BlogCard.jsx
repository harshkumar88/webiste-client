const BlogCard = ({ item }) => {
  return (
    <div className=" xsm:w-[300px]  w-[270px] rounded-[30px] h-[340px]   flex-shrink-0  flex flex-col   ">
      <img
        src={item.img}
        alt="Main Content"
        className="w-[100%] h-[55%]  mx-auto rounded-t-3xl"
      />

      <div className="flex flex-col gap-2 p-4 bg-dim_green  rounded-b-3xl">
        <p className=" text-[24px]  font-semibold">{item.label}</p>
        <p className="  text-[14px] leading-[22px]"> {item.details}</p>

        <p className="cursor-pointer w-fit">Read Blog {"->"}</p>
      </div>
    </div>
  );
};

export default BlogCard;
