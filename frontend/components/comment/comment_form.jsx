import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { cardId, userId, newCardComment } = this.props;
    newCardComment({
      comment: e.target.comment.value,
      card_id: cardId,
      user_id: userId});
    e.target.comment.value = "";
  }

  render() {
    return (
      <div id="comment">
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type='text'
            name='comment'
            placeholder="Write your comment here"/>
          <button>+</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
