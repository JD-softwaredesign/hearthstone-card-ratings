import React from 'react';
import { withRouter } from 'react-router';
import ExpansionIndexItem from './expansion_index_item.jsx';

class Expansion extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   current: {title: ""}
    // };
    this.renderCards = this.renderCards.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     current: nextProps.current
  //   });
  // }
  //
  renderCards() {
    return this.props.cards.map((card) => {
      return <ExpansionIndexItem key={card.name} card={card} />;
    });

    // let cards = [];
    // this.props.cards.forEach((card) => {
    //   cards.push(
    //     <div key={card.name}>
    //       <li>{card.name}</li>
    //       <img src={card.image_url}></img>
    //     </div>
    //   );
    // });
    // return cards;
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
