import React from 'react';
import { withRouter } from 'react-router';
import ExpansionIndexItem from './expansion_index_item.jsx';

class Expansion extends React.Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  // take cards array for filters
  renderCards(cards) {
    const { receiveRating, user_ratings, userId } = this.props;
    return cards.map((card) => {
      return <ExpansionIndexItem
        key={card.name}
        card={ card }
        receiveRating={ receiveRating }
        rating={ user_ratings[card.id] }
        userId={ userId } />;
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.current.title}</div>
        <ul>{this.renderCards(this.props.cards)}</ul>
      </div>
    );
  }
}

export default withRouter(Expansion);
