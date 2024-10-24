const CustomCard = ({ item }) => {
  return (
    <div className="w-[30%] sm:w-[30%] md:w-[20%] flex-shrink-0 text-black rounded-3xl p-6 sm:p-8 shadow-lg z-10 flex flex-col gap-6 relative overflow-hidden bg-white">
      {" "}
      {/* Main Image */}
      <img
        src={item.img1}
        alt="Main Content"
        className="w-[50%]  object-cover "
      />
      {/* Details Text */}
      <p className="text-[0.9rem] sm:text-[1rem] leading-relaxed">
        {item.details}
      </p>
      {/* Profile Section */}
      <div className="flex items-center gap-4 mt-2 mb-6">
        {/* Secondary Image */}
        <img
          src={item.img2}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-gray-600">{item.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
