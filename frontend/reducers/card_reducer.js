import { CardConstants } from '../actions/card_actions.js';
import { CommentConstants } from '../actions/comment_actions.js';
import merge from 'lodash/merge';

let defaultState = {
  id: undefined,
  name: '',
  attack: 0,
  card_text: '',
  expansion_id: undefined,
  health: 0,
  hero_class: '',
  image_url: '',
  mana: 0,
  released: false,
  tribe: '',
  rarity: '',
  card_comments: []
};

const CardReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case CardConstants.RECEIVE_CARD:
      return action.card;
    case CommentConstants.RECEIVE_CARD_COMMENT:
      newState = merge({}, state);
      newState.card_comments.push(action.comment);
      return newState;
    case CommentConstants.DELETE_CARD_COMMENT:
      newState = merge({}, state);
      for (let i=0; i<newState.card_comments.length; i++) {
        if (newState.card_comments[i].id === action.commentId) {
          newState.card_comments.splice(i, 1);
          break;
        }
      }
      return newState;
    case CardConstants.CLEAR_CARD:
      return defaultState;
    default:
      return state;
  }
};

export default CardReducer;
