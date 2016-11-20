import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { cardId, userId, newCardComment } = this.props;
    newCardComment({
      comment: e.target.comment.value,
      card_id: cardId,
      user_id: userId});
    e.target.comment.value = "";
    this.setState({comment: ""});
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({comment: e.target.value});
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input type='text'
          name='comment'
          placeholder="Write your comment here"
          onChange={ this.handleInput.bind(this) }/>
        <button disabled={ this.state.comment === "" }>+</button>
      </form>
    );
  }
}

export default CommentForm;
