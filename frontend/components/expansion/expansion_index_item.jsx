import React from 'react';
import { withRouter } from 'react-router';

const ExpansionIndexItem = ({card, router}) => {
  const goToCardDetail = () => {
    router.push(`/cards/${card.id}`);
  };

  return <div onClick={ goToCardDetail }>
    <img src={card.image_url}></img>
  </div>;
};

export default withRouter(ExpansionIndexItem);
