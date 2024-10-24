const Card = ({ item }) => {
  return (
    <div className="bg-white flex-shrink-0  w-[100%] flex flex-col gap-2  shadow-lg z-0 ">
      <div className="w-[100%] ">
        <img src={item.img} alt="img" className="w-full  h-[50vh] " />
      </div>
    </div>
  );
};

export default Card;
