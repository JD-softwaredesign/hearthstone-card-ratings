import React from 'react';

const Comment = ({ comment }) => {
  return <div>{comment.username} says: {comment.comment}</div>;
};

export default Comment;
