const TestimonialCard = ({ item }) => {
  return (
    <div className="w-[270px] md:w-[280px] xl:w-[300px]  flex-shrink-0 text-black rounded-3xl shadow-lg z-10 flex flex-col gap-6 relative overflow-hidden bg-dim_green py-6 px-4">
      {" "}
      {/* Main Image */}
      <img
        src={item.img1}
        alt="Main Content"
        className="w-[50%]  object-cover "
      />
      {/* Details Text */}
      <p className="text-[0.9rem] sm:text-[0.94rem] leading-relaxed">
        {item.details}
      </p>
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {/* Secondary Image */}
        <img
          src={item.img2}
          alt={item.name}
          className="w-15 h-15 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-gray-600">{item.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
