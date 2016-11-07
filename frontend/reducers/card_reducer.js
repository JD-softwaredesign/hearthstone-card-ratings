import { CardConstants } from '../actions/card_actions.js';

const CardReducer = (state=null, action) => {
  switch (action.type) {
    case CardConstants.RECEIVE_CARD:
      return action.card;
    default:
      return state;
  }
};

export default CardReducer;
