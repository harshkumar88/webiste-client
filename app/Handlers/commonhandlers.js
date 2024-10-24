const slideLeft = (left, cardRef) => {
  if (!left) return;
  const currentScroll = cardRef.current.scrollLeft;
  cardRef.current.scrollTo({
    left: currentScroll - 1200,
    behavior: "smooth",
  });
};

const slideRight = (right, cardRef) => {
  if (!right) return;
  const currentScroll = cardRef.current.scrollLeft;
  cardRef.current.scrollTo({
    left: currentScroll + 1200,
    behavior: "smooth",
  });
};

export { slideLeft, slideRight };
