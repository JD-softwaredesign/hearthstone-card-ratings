import React from 'react';
import sendRating from '../../util/rating_api_util.js';

const Rating = ({card, receiveRating, rating, userId}) => {

  const rateCard = (newRating) => {
    let success = (res) => {
      receiveRating(res);
    };
    sendRating(card.id, newRating, userId, success);
  };

  const renderStars = () => {
    let stars = [1, 2, 3, 4, 5];
    rating = rating ? rating : 0;
    return stars.map((star) => {
      return <div style={{width: '50px', height: '50px',
        border: 'solid black 1px', borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: star <= rating ? 'yellow' : ""}}
        key={card.name + star}
        className="star"
        onClick={ () => rateCard(star) }></div>;
    });
  };

  return <div>
    { renderStars() }
  </div>;
};

export default Rating;
