import React from 'react';
import { withRouter } from 'react-router';
import Rating from './rating.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { card, receiveRating, user_ratings, userId } = this.props;
    return (
      <div>
        <img src={card.image_url}></img>
        <Rating card={ card }
          receiveRating={ receiveRating }
          rating={ user_ratings[card.id] }
          userId={ userId } />
      </div>
    );
  }
}

export default withRouter(Card);
