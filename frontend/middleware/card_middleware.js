import { CardConstants, receiveExpansionCards, receiveCard } from '../actions/card_actions.js';
import { fetchExpansionCards, fetchCard } from '../util/card_api_util.js';

const CardMiddleware = (store) => (next) => (action) => {
  const fetchCardsSuccess = (cards) => {
    // because of jbuilder structure, we took cards out of cards Object
    store.dispatch(receiveExpansionCards(cards.cards));
  };
  const fetchCardSuccess = (card) => {
    store.dispatch(receiveCard(card));
  };
  switch (action.type) {
    case CardConstants.REQUEST_EXPANSION_CARDS:
      fetchExpansionCards(action.id, fetchCardsSuccess);
      break;
    case CardConstants.REQUEST_CARD:
      fetchCard(action.id, fetchCardSuccess);
      break;
    default:
      return next(action);
  }
};

export default CardMiddleware;
