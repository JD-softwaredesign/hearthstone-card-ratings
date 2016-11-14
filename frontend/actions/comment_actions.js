const CommentConstants = {
  CREATE_CARD_COMMENT: "CREATE_CARD_COMMENT",
  RECEIVE_CARD_COMMENT: "RECEIVE_CARD_COMMENT"
};

const createCardComment = (comment) => ({
  type: CommentConstants.CREATE_CARD_COMMENT,
  comment
});

const receiveCardComment = (comment) => ({
  type: CommentConstants.RECEIVE_CARD_COMMENT,
  comment
});

export { CommentConstants, createCardComment, receiveCardComment };
