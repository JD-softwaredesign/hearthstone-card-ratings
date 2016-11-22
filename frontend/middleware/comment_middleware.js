import { CommentConstants, receiveCardComment } from '../actions/comment_actions.js';
import { createCardComment, deleteCardComment } from '../util/comment_api_util.js';

const CommentMiddleware = (store) => (next) => (action) => {
  const createCommentSuccess = (comment) => {
    store.dispatch(receiveCardComment(comment));
  };
  switch (action.type) {
    case CommentConstants.NEW_CARD_COMMENT:
      createCardComment(action.comment, createCommentSuccess);
      break;
    case CommentConstants.DELETE_CARD_COMMENT:
      deleteCardComment(action.commentId);
      next(action);
      break;
    default:
      return next(action);
  }
};

export default CommentMiddleware;
