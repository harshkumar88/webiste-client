const Slider = (props) => {
  const { checkScroll, cardRef, style } = props;
  return (
    <div className="flex flex-col gap-2">
      <div ref={cardRef} onScroll={checkScroll} className={style}>
        {props.children}
      </div>
    </div>
  );
};

export default Slider;
