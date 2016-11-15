import { CardConstants } from '../actions/card_actions.js';
import { CommentConstants } from '../actions/comment_actions.js';
import merge from 'lodash/merge';

const CardReducer = (state=null, action) => {
  switch (action.type) {
    case CardConstants.RECEIVE_CARD:
      return action.card;
    case CommentConstants.RECEIVE_CARD_COMMENT:
      let newState = merge({}, state);
      newState.card_comments.push(action.comment);
      return newState;
    default:
      return state;
  }
};

export default CardReducer;
