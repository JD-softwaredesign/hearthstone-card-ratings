import React from 'react';
import { withRouter } from 'react-router';
import Rating from './rating.jsx';
import CommentsContainer from '../comment/comments_container.js';
import CommentFormContainer from '../comment/comment_form_container.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { card, receiveRating, user_ratings, userId } = this.props;
    return (
      <div>
        <img src={card.image_url}></img>
        <Rating card={ card }
          receiveRating={ receiveRating }
          rating={ user_ratings[card.id] }
          userId={ userId } />
        <CommentsContainer />
        <CommentFormContainer />
      </div>
    );
  }
}

export default withRouter(Card);
