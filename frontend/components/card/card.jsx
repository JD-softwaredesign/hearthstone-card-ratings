import React from 'react';
import { withRouter } from 'react-router';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>I'm a card</div>
    );
  }
}

export default withRouter(Card);
