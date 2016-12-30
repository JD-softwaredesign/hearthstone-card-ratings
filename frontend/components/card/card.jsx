import React from 'react';
import RatingContainer from './rating_container.js';
import CommentsContainer from '../comment/comments_container.js';
import CommentFormContainer from '../comment/comment_form_container.js';
import Stat from './stat.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  showProperUI() {
    if (this.props.card.released) {
      return <Stat card={this.props.card} user={this.props.user}/>;
    } else {
      return <RatingContainer />;
    }
  }

  render() {
    return (
      <div className = 'card_container'>
        <div className='card'>
          <img src={ this.props.card.image_url }></img>
          { this.showProperUI() }
        </div>
        <div className='comments_container'>
          <CommentsContainer />
          <CommentFormContainer />
        </div>
      </div>
    );
  }
}

export default Card;
