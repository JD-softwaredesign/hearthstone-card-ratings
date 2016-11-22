import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  delete () {
    console.log(this.props.comment);
    this.props.deleteCardComment(this.props.comment.id);
  }

  render () {
    return (
      <div className='comment_container'>
        <button className={ this.props.username === this.props.comment.username ? "delete": "hide"} onClick={ this.delete.bind(this) }>X</button>
        <div className='comment'>
          {this.props.comment.username} says: { this.props.comment.comment}
        </div>
      </div>
      );
    }
}

export default Comment;
