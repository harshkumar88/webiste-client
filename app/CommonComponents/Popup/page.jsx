const Popup = (props) => {
  const { children, setIsvisible } = props;

  const handleClose = () => {
    setIsvisible(false);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-100/30 h-[100vh] w-[100vw] flex flex-col items-center justify-center z-50">
      <div className="flex flex-col bg-white md:w-[50vw] w-[94vw] rounded-lg  gap-0 shadow-2xl">
        <div className="flex justify-end mt-2 mr-2">
          <span
            className="text-[18px] border  text-white bg-slate-800 rounded-full px-2  font-bold text-right md:mr-3 cursor-pointer"
            onClick={handleClose}
          >
            X
          </span>
        </div>
        <div className="w-[100%] md:p-2 p-4">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
