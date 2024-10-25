const CaseStudyCard = ({ item }) => {
  return (
    <div className="w-[90%] sm:w-[48%] md:w-[34%] lg:w-[24%] flex-shrink-0 border border-yellow_light text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col gap-6 relative overflow-hidden">
      {/* Main Image */}
      <img
        src={item.img}
        alt="Main Content"
        className="w-20 h-20 object-cover rounded-md"
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
          <p className="text-sm text-gray-400">{item.sub_title}</p>
        </div>
      </div>
      <div className="bg-yellow_light w-full h-2 absolute bottom-0 left-0 rounded-b-3xl"></div>
    </div>
  );
};

export default CaseStudyCard;
