import React from 'react';
import { withRouter } from 'react-router';

class Expansion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {title: ""}
    };
    this.renderCards = this.renderCards.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.current
    });
  }

  renderCards() {
    let cards = [];
    this.props.cards.forEach((card) => {
      cards.push(
        <div key={card.name}>
          <li>{card.name}</li>
          <img src={card.image_url}></img>
        </div>
      );
    });
    return cards;
  }

  render() {
    return (
      <div>
        <div>{this.state.current.title}</div>
        <ul>{this.renderCards()}</ul>
      </div>
    );
  }
}

export default withRouter(Expansion);
