import { CommentConstants, receiveCardComment } from '../actions/comment_actions.js';
import { createCardComment } from '../util/comment_api_util.js';

const CommentMiddleware = (store) => (next) => (action) => {
  const createCommentSuccess = (comment) => {
    store.dispatch(receiveCardComment(comment));
  };
  switch (action.type) {
    case CommentConstants.CREATE_CARD_COMMENT:
      createCardComment(action.comment, createCommentSuccess);
      break;
    default:
      return next(action);
  }
};

export default CommentMiddleware;
