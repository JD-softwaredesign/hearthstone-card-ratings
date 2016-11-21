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
    case CardConstants.CLEAR_CARD:
      return {id: undefined,
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
             card_comments: []};
    default:
      return state;
  }
};

export default CardReducer;
