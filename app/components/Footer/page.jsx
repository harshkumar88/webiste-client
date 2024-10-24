import styles from "../../styles";
import { footerLinks } from "../../static";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col  px-10 mx-auto bg-green_gradient w-[100%]`}
  >
    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-8 mx-auto w-[80vw] `}
    >
      <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins text-[18px] leading-[27px]  text-white font-semibold">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className=" flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px]  mx-auto w-[85vw] border-t-[#3F3E45]">
      <p className="font-poppins font-normal  text-[18px] leading-[27px] text-white w-[25%]">
        A interactive training platform to upskill your workforce
      </p>

      <div>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          <span>About us</span> | <span>Privacy Policy</span> |{" "}
          <span>Terms Of Use</span>
        </p>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          © 2022 workryt technologies private limited
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
