import CardZoomer from "../../../CommonComponents/CardZoomer/page";
import { card_zoomer_content } from "../../../../static";
import Button from "../../../CommonComponents/Button";
import ContentBoxCard from "../../../Cards/ContentBoxCard";

const ContentBox = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row  gap-10 items-center sm:w-[80%] w-[95%] mx-auto sm:px-4 px-2">
      <div className="md:w-[50%] w-[80%]">
        <p className="lg:text-[4.5rem] md:text-[3.5rem] sm:text-[3.8rem] text-[3rem] font-bold text-white">
          Your Hub
        </p>
        <p className="lg:text-[4.5rem] md:text-[3.5rem]  sm:text-[3.8rem] text-[2.5rem]  font-bold text-white">
          For{" "}
          <span className="bg-yellow_light text-green_gradient ">
            Unlocking
          </span>
        </p>
        <p className="lg:text-[4.5rem] md:text-[3.5rem]  sm:text-[3.8rem] text-[2.5rem]  font-bold text-white">
          True Potential
        </p>

        {/* <div className="flex flex-col lg:w-[50%] md:w-[70%]  w-[90%] gap-2 ">
          <Button
            btn_type="button"
            content="Try Chaabi for Free"
            btn_styles={
              "bg-yellow_light text-green_gradient border border-gray-300 rounded-full px-8 py-3 lg:text-[1.4rem] md:text-[1.2rem] text-[1rem] mt-5"
            }
          />
          <p className="text-white  mx-auto ">No credit card required</p>
        </div> */}
      </div>
      <div className="md:w-[50%] w-[100%]  sm:block hidden ">
        <CardZoomer content={card_zoomer_content} />
      </div>

      <div className="flex  items-start  gap-5 ps-4  sm:hidden overflow-x-auto remove_scrollbar w-[100%] ">
        {card_zoomer_content.map((card) => (
          <ContentBoxCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ContentBox;
