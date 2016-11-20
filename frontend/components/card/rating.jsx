import React from 'react';
import sendRating from '../../util/rating_api_util.js';

class Rating extends React.Component {
  // get card info in card page
  // get single card info in card index page with indexCard
  constructor(props) {
    super(props);
  }

  rateCard(newRating) {
    const { card, userId, indexCard } = this.props;
    let currentCard = card.id ? card : indexCard;
    let success = (res) => {
      this.props.receiveRating(res);
    };
    sendRating(currentCard.id, newRating, userId, success);
  }

  renderStars() {
    let stars = [1, 2, 3, 4, 5];
    const { card, ratings, indexCard } = this.props;
    let currentCard = indexCard ? indexCard : card;
    let rating = ratings[currentCard.id];
    return stars.map((star) => {
      return <div style={{color: star <= (rating || 0) ? 'rgb(255, 180, 0)' : ""}}
        key={currentCard.name + star}
        className="star"
        onClick={ () => this.rateCard(star) }>★</div>;
    });
  }

  render() {
    return <div className='rating'>
      { this.renderStars() }
    </div>;
  }
}

export default Rating;
