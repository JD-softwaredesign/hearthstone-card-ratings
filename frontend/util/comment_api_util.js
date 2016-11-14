const createCardComment = (comment, success) => {
  $.ajax({
    url: `/api/comments/`,
    type: 'POST',
    data: {comment: comment},
    success
  });
};

export { createCardComment };
