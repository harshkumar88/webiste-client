const styles = {
  main_container:
    "bg-primary w-full overflow-x-hidden h-[100vh] overflow-y-auto webkit_scrollbar scroll-container",
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

const common_styles = {
  flex_col: "flex flex-col",
  alert_strip:
    "fixed bottom-3 left-7 right-7 px-4 py-1 rounded-md bg-green-700 text-white font-semibold  min-h-7",
};

const header_styles = {
  container: "",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionwrapper: `flex  md:mt-0 mt-2 relative flex-wrap gap-10`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

const form_styles = {
  join_submit_btn:
    "mt-10 bg-slate-900 text-white w-fit m-auto px-7 py-2 rounded-full transition duration-300 ease-in-out transform active:bg-white active:text-black active:scale-95",
  join_form_input:
    "border-b-2 border-t-0 border-gray-600 outline-none px-2 text-[1rem] bg-black-gradient-3 text-white",
};

const area_styles = {
  label: "md:text-[2.2rem] text-[1.2rem] font-bold text-green-500 mx-auto",
  areas_wrapper: "gap-4   md:text-[1.5rem]  text-[1.1rem] mt-4 font-semibold  ",
};

const banner_styles = {
  mobile_banner_text:
    "text-center absolute  flex flex-col gap-1  top-16 mt-2 left-10  m-auto w-[80%] md:text-[3.4rem] text-[1rem] text-slate-950 font-bold ",
  banner_text:
    "text-center absolute top-1/4 m-auto w-[90%] flex flex-col gap-2 left-1/4 text-slate-950  font-bold  ",
};

export {
  styles,
  header_styles,
  form_styles,
  common_styles,
  area_styles,
  banner_styles,
};
