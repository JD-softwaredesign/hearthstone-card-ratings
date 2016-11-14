import React from 'react';
import { withRouter } from 'react-router';
import Comment from './comment.jsx';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.commentsList = this.commentsList.bind(this);
  }

  commentsList () {
    return this.props.comments.map((comment, idx) => {
      return <Comment key={comment.comment + idx} comment={comment}/>;
    });
  }

  render() {
    return (
      <ul>
        {this.commentsList()}
      </ul>
    );
  }
}

export default withRouter(Comments);
