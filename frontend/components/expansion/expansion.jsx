import React from 'react';
import { withRouter } from 'react-router';
import ExpansionIndexItem from './expansion_index_item.jsx';

class Expansion extends React.Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    let cards = this.props.cards;
    return Object.keys(cards).map((id) => {
      return <ExpansionIndexItem key={cards[id].name} card={cards[id]} />;
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.current.title}</div>
        <ul>{this.renderCards()}</ul>
      </div>
    );
  }
}

export default withRouter(Expansion);
