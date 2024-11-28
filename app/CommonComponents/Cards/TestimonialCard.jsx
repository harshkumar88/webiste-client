const TestimonialCard = ({ item }) => {
  return (
    <div className="xsm:w-[300px]  w-[270px]  flex-shrink-0 text-black rounded-3xl shadow-lg z-10 flex flex-col gap-[8px] relative overflow-hidden bg-dim_green py-[30px] px-4 ">
      {" "}
      {/* Main Image */}
      <img
        src={item.img1}
        alt="Main Content"
        className="w-[140px]  object-contain "
      />
      {/* Details Text */}
      <p className="text-[14px]">{item.details}</p>
      {/* Profile Section */}
      <div className="flex items-center gap-4 mt-2">
        {/* Secondary Image */}
        <img
          src={item.img2}
          alt={item.name}
          className="w-15 h-15 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-[17px]">{item.name}</p>
          <p className="text-sm text-gray-600 text-[17px]">
            {item.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
