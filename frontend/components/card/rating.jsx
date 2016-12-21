import React from 'react';
import sendRating from '../../util/rating_api_util.js';

class Rating extends React.Component {
  // get card info in card page
  // get single card info in card index page with indexCard
  constructor(props) {
    super(props);
  }

  rateCard(newRating, type) {
    const { card, indexCard } = this.props;
    let currentCard = card.id ? card : indexCard;
    if (currentCard.released) {
      return;
    }
    let success = (res) => {
      this.props.receiveRating(res);
    };
    sendRating(currentCard.id, type, newRating, success);
  }

  renderRating(type) {
    let stars = [1, 2, 3, 4, 5];
    const { card, rating, arena_rating, indexCard } = this.props;
    let currentCard = indexCard ? indexCard : card;
    let rate = type === 'rating' ? rating[currentCard.id-1] : arena_rating[currentCard.id-1];
    let color = type === 'rating' ? 'rgb(255, 180, 0)' : 'rgb(255, 77, 77)';
    return stars.map((star) => {
      return <div style={{color: star <= (rate || 0) ? color : ""}}
        key={currentCard.name + star}
        className={"star" + (currentCard.released ? " disabled" : "")}
        onClick={ () => this.rateCard(star, type) }>★</div>;
    });
  }

  render() {
    return <div className='rating'>
      <label>Rating
        { this.renderRating('rating') }
      </label>
      <label>Arena
        { this.renderRating('arena_rating') }
      </label>
    </div>;
  }
}

export default Rating;
