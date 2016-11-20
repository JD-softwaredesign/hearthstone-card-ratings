import React from 'react';
import RatingContainer from './rating_container.js';
import CommentsContainer from '../comment/comments_container.js';
import CommentFormContainer from '../comment/comment_form_container.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'card_container'>
        <div className='card'>
          <img src={ this.props.card.image_url }></img>
          <RatingContainer />
        </div>
        <div className='comments'>
          <h1>Comments</h1>
          <CommentsContainer />
          <CommentFormContainer />
        </div>
      </div>
    );
  }
}

export default Card;
