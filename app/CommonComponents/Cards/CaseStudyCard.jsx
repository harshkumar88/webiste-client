const CaseStudyCard = ({ item }) => {
  return (
    <div className="w-[300px]   bg-green_gradient flex-shrink-0 border border-yellow_light text-white rounded-3xl  shadow-lg flex flex-col relative gap-[18px] py-[30px] overflow-hidden ">
      <div className="flex flex-col gap-1 px-4">
        {" "}
        <span className="text-[24px]  font-bold leading-5 ">
          {item.label}
        </span>{" "}
        <span className="text-[24px]  font-bold ">{item.short_label}</span>
      </div>
      {/* Details Text */}
      <p className="text-[14px] leading-[22px] px-4">{item.details}</p>

      {/* Profile Section */}
      <div className="flex items-center gap-4  px-4">
        {/* Secondary Image */}
        <img
          src={item.img2}
          alt={item.name}
          className="w-16 h-16 rounded-full object-cover mt-3"
        />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-gray-400">{item.sub_title}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
// px-2 py-6
