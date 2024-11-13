const InteractiveSectionCard = ({ item }) => {
  return (
    <div className="w-[100%]  bg-red-300 ">
      <img src={item.img} alt="img" className="w-full h-auto object-cover" />
    </div>
  );
};

export default InteractiveSectionCard;
