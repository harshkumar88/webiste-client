const BlogCard = ({ item }) => {
  return (
    <div className="w-[70%] sm:w-[30%] md:w-[22%] border border-slate-300 px-1  py-4 flex-shrink-0  rounded-3xl  flex flex-col gap-5  overflow-hidden">
      <img
        src={item.img}
        alt="Main Content"
        className="w-[94%] h-[55%]  rounded-md  mx-auto"
      />

      <div className="flex flex-col gap-2 px-5">
        <p className="text-[0.9rem] sm:text-[1rem] leading-relaxed">
          {item.date}
        </p>

        <p className="text-[0.9rem] sm:text-[1.2rem] leading-relaxed font-semibold">
          {item.details}
        </p>
        <p className="cursor-pointer w-fit mt-2">Read Blog {"->"}</p>
      </div>
    </div>
  );
};

export default BlogCard;
