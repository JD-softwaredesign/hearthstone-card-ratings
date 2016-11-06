import { CardConstants, receiveExpansionCards } from '../actions/card_actions.js';
import { fetchExpansionCards } from '../util/card_api_util.js';

const CardMiddleware = (store) => (next) => (action) => {
  const fetchSuccess = (cards) => {
    store.dispatch(receiveExpansionCards(cards));
  };
  switch (action.type) {
    case CardConstants.REQUEST_EXPANSION_CARDS:
      fetchExpansionCards(action.id, fetchSuccess);
      break;
    default:
      return next(action);
  }
};

export default CardMiddleware;
