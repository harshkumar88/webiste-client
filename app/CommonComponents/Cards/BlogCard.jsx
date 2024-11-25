const BlogCard = ({ item }) => {
  return (
    <div className=" xl:w-[280px] xsm:w-[270px] w-[250px]  flex-shrink-0  flex flex-col gap-0  overflow-hidden">
      <img
        src={item.img}
        alt="Main Content"
        className="w-[100%] h-[55%]  mx-auto rounded-t-3xl"
      />

      <div className="flex flex-col gap-2 py-4 px-5 bg-dim_green pb-5 rounded-b-3xl">
        <p className="text-[1.4rem] md:text-[1.6rem] leading-relaxed font-semibold">
          {item.label}
        </p>
        <p className="text-[0.9rem] md:text-[0.92rem] leading-relaxed">
          {item.details}
        </p>

        <p className="cursor-pointer w-fit">Read Blog {"->"}</p>
      </div>
    </div>
  );
};

export default BlogCard;
