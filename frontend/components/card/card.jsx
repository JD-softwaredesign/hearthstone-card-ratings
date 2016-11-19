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
      <div className='container-fluid'>
        <img className='img-responsive' src={ this.props.card.image_url }></img>
        <RatingContainer />
        <CommentsContainer />
        <CommentFormContainer />
      </div>
    );
  }
}

export default Card;
