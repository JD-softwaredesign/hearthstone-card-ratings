import React from 'react';
import { withRouter } from 'react-router';
import Rating from './rating.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = this.props.card;
    return (
      <div>
        <img src={card.image_url}></img>
        <Rating card={card} />
        <h1>Card Name: {card.name}</h1>
        <h3>Hero Class: {card.hero_class}</h3>
        <h3>Tribe: {card.tribe}</h3>
        <h3>Card Text: {card.card_text}</h3>
        <h2>Attack: {card.attack}</h2>
        <h2>Health: {card.health}</h2>
        <h2>Mana: {card.mana}</h2>
      </div>
    );
  }
}

export default withRouter(Card);
