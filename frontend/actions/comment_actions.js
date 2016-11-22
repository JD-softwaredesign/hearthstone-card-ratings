const CommentConstants = {
  NEW_CARD_COMMENT: "NEW_CARD_COMMENT",
  RECEIVE_CARD_COMMENT: "RECEIVE_CARD_COMMENT",
  DELETE_CARD_COMMENT: "DELETE_CARD_COMMENT"
};

const newCardComment = (comment) => ({
  type: CommentConstants.NEW_CARD_COMMENT,
  comment
});

const receiveCardComment = (comment) => ({
  type: CommentConstants.RECEIVE_CARD_COMMENT,
  comment
});

const deleteCardComment = (commentId) => ({
  type: CommentConstants.DELETE_CARD_COMMENT,
  commentId
});

export { CommentConstants, newCardComment, receiveCardComment, deleteCardComment };
