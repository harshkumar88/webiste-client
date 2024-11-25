import { AiOutlineYoutube as Youtube } from "react-icons/ai";
import { IoLogoInstagram as Instagram } from "react-icons/io5";
import { GrLinkedinOption as Linkedin } from "react-icons/gr";
import WhiteLogo from "../../../assets/svg/whitelogo";

const SocialMedia = () => {
  return (
    <div className="flex md:flex-col flex-row md:gap-3 gap-10 items-center sm:justify-center justify-between ">
      {" "}
      <WhiteLogo />
      <div className="flex gap-5 items-center">
        <Youtube className=" text-white text-[2rem] cursor-pointer" />
        <Instagram className=" text-white text-[1.5rem] cursor-pointer" />
        <Linkedin className=" text-white text-[1.5rem] cursor-pointer" />
      </div>
    </div>
  );
};

export default SocialMedia;
