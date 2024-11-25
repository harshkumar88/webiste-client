const FeaturesWrapper = ({ content, reverse }) => {
  return (
    <div className="flex flex-col gap-20">
      {content?.map((item, idx) => {
        return (
          <div
            data-aos={idx !== 0 && "fade-up"}
            className={`w-[90%]  mx-auto flex justify-between items-center gap-16 md:flex-row  flex-col-reverse  ${
              (reverse + idx) % 2 != 0 ? "md:flex-row-reverse" : ""
            }`}
            key={idx}
          >
            <div className="relative md:w-[50%] sm:w-[80%] w-[100%]   ">
              <img
                src={item.img1}
                className="object-cover lg:w-[450px] w-[100%] "
              />
              <img
                src={item.img2}
                className="absolute md:top-6  sm:top-10 top-5 md:left-10 sm:left-14 left-7 lg:w-[60%]   w-[80%] object-cover "
              />
            </div>
            <div className="md:w-[50%] w-[100%]  flex flex-col gap-3 md:text-start text-center ">
              <p className="font-bold sm:text-[2.5rem] lg:text-[2.7rem] md:text-[2.2rem] xs:text-[2.5rem] text-[2rem] ">
                {item.title}
              </p>
              <p className="  w-[100%] sm:text-[0.9rem] lg:text-[1rem] text-[0.9rem] md:text-justify text-center">
                {item.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesWrapper;
