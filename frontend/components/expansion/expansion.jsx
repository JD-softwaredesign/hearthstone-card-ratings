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
        <img className="expansion_img" src={this.props.current.image_url}></img>
        <ul className="cards_list">{this.renderCards(this.props.cards)}</ul>
      </div>
    );
  }
}

export default Expansion;
