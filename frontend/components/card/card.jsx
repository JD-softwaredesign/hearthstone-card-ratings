import React from 'react';
import { withRouter } from 'react-router';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = this.props.card;
    return (
      <div>{card.name}</div>
    );
  }
}

export default withRouter(Card);
