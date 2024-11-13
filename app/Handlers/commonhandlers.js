const slideLeft = (left, cardRef, numCardsToShow) => {
  if (!left) return;
  const cardContainer = cardRef.current;
  const cardWidth = cardContainer.clientWidth / numCardsToShow; // Calculate the width of one card
  const currentScroll = cardContainer.scrollLeft; // Get the current scroll position
  const scrollAmount = cardWidth * numCardsToShow; // Calculate the amount to scroll for the next set of cards

  cardContainer.scrollTo({
    left: currentScroll - cardContainer.clientWidth,
    behavior: "smooth",
  });
};

const slideRight = (right, cardRef, numCardsToShow) => {
  if (!right) return;

  const cardContainer = cardRef.current;
  const cardWidth = cardContainer.clientWidth / numCardsToShow; // Calculate the width of one card
  const currentScroll = cardContainer.scrollLeft; // Get the current scroll position
  const scrollAmount = cardWidth * numCardsToShow; // Calculate the amount to scroll for the next set of cards

  cardContainer.scrollTo({
    left: currentScroll + cardContainer.clientWidth,
    behavior: "smooth",
  });
};

export { slideLeft, slideRight };
