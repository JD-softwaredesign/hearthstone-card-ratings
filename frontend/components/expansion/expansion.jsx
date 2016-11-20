import React from 'react';
import ExpansionIndexItem from './expansion_index_item.jsx';

class Expansion extends React.Component {
  constructor(props) {
    super(props);
  }

  // take cards array for filters
  renderCards(cards) {
    return cards.map((card) => {
      return <ExpansionIndexItem
        key={card.name}
        card={ card }/>;
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

export default Expansion;
