const sendRating = (cardId, rating, userId, success) => {
  $.ajax({
    url: `/api/rating.json`,
    type: "POST",
    data: {card_id: cardId, rating: rating, user_id: userId},
    success
  });
};

export default sendRating;
