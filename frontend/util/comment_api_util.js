const createCardComment = (comment, success) => {
  $.ajax({
    url: `/api/comments/`,
    type: 'POST',
    data: {comment: comment},
    success
  });
};

const deleteCardComment = (commentId, success) => {
  $.ajax({
    url: `/api/comments/${commentId}`,
    type: 'DELETE',
    success
  });
};

export { createCardComment, deleteCardComment };
