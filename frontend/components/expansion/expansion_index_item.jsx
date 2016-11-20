import React from 'react';
import { withRouter } from 'react-router';
import RatingContainer from './../card/rating_container.js';

const ExpansionIndexItem = ({card, router}) => {
  const goToCardDetail = () => {
    router.push(`/cards/${card.id}`);
  };

  return <div className='index_card'>
    <img src={card.image_url} onClick={ goToCardDetail }></img>
    <RatingContainer indexCard={ card }/>
  </div>;
};

export default withRouter(ExpansionIndexItem);
