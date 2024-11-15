const CaseStudyCard = ({ item }) => {
  return (
    <div className="xl:w-[280px] xsm:w-[270px] w-[250px] bg-green_gradient flex-shrink-0 border border-yellow_light text-white rounded-3xl  shadow-lg flex flex-col relative gap-3 overflow-hidden px-2 py-6">
      {/* Main Image */}
      {/* <img
        src={item.img}
        alt="Main Content"
        className="w-20 h-20 object-cover rounded-md"
      /> */}

      <p className="text-[1.4rem] sm:text-[1.6rem] leading-6 font-bold sm:leading-8 px-4 ">
        {item.label}
      </p>
      {/* Details Text */}
      <p className="text-[0.82rem] sm:text-[0.9rem] leading-7 px-4">
        {item.details}
      </p>
      {/* Profile Section */}
      <div className="flex items-center gap-4  px-2">
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
