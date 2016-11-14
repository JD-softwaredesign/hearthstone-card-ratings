import React from 'react';
import { withRouter } from 'react-router';
import Rating from './../card/rating.jsx';

const ExpansionIndexItem = ({card, router, receiveRating, rating, userId}) => {
  const goToCardDetail = () => {
    router.push(`/cards/${card.id}`);
  };

  return <div>
    <img src={card.image_url} onClick={ goToCardDetail }></img>
    <Rating card={ card }
      receiveRating={ receiveRating }
      rating={ rating }
      userId={ userId } />
  </div>;
};

export default withRouter(ExpansionIndexItem);
