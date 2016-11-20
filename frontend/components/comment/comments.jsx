import React from 'react';
import Comment from './comment.jsx';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  commentsList () {
    return this.props.comments.map((comment, idx) => {
      return <Comment key={comment.comment + idx} comment={comment}/>;
    });
  }

  render() {
    return <div className='comments'>
      <h1>Comments</h1>
      <ul className='comment-list'> { this.commentsList() } </ul>
    </div>;
  }
}

export default Comments;
