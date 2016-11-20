import React from 'react';

const Comment = ({ comment }) => {
  return <div className='comment'>{comment.username} says: { comment.comment }</div>;
};

export default Comment;
