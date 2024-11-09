const CaseStudyCard = ({ item }) => {
  return (
    <div className="w-[88%] sm:w-[48%] md:w-[38%] lg:w-[20%] bg-green_gradient flex-shrink-0 border border-yellow_light text-white rounded-[30px] p-6 lg:pt-0 pt-8 sm:p-6 shadow-lg flex flex-col gap-3 sm:gap-0 relative overflow-hidden">
      {/* Main Image */}
      {/* <img
        src={item.img}
        alt="Main Content"
        className="w-20 h-20 object-cover rounded-md"
      /> */}

      <p className="text-[1.4rem] sm:text-[1.6rem] leading-6 font-bold sm:leading-8 sm:p-3">
        {item.label}
      </p>
      {/* Details Text */}
      <p className="text-[0.9rem] sm:text-[1.1rem] leading-6 sm:leading-8 sm:p-3">
        {item.details}
      </p>
      {/* Profile Section */}
      <div className="flex items-center gap-4 mt-2 mb-6 ml-3">
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
      {/* <div className="bg-yellow_light w-full h-3 absolute bottom-0 left-0 rounded-b-3xl"></div> */}
    </div>
  );
};

export default CaseStudyCard;
