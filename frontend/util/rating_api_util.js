const sendRating = (cardId, rateType, rating, success) => {
  $.ajax({
    url: `/api/rating.json`,
    type: "POST",
    data: {card_id: cardId, rate_type: rateType, rating: rating},
    success
  });
};

export default sendRating;
