const sendRating = (cardId, rating, success) => {
  $.ajax({
    url: `/api/rating.json`,
    type: "POST",
    data: {card_id: cardId, rating: rating},
    success
  });
};

export default sendRating;
