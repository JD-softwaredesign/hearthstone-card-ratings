import { CardConstants } from '../actions/card_actions.js';

const CardReducer = (state=[], action) => {
  switch (action.type) {
    case CardConstants.RECEIVE_EXPANSION_CARDS:
      return action.cards;
    default:
      return state;
  }
};

export default CardReducer;
