const CardConstants = {
  REQUEST_EXPANSION_CARDS: "REQUEST_EXPANSION_CARDS",
  RECEIVE_EXPANSION_CARDS: "RECEIVE_EXPANSION_CARDS",
  REQUEST_CARD: "REQUEST_CARD",
  RECEIVE_CARD: "RECEIVE_CARD",
  CLEAR_CARD: "CLEAR_CARD"
};

const requestExpansionCards = (id) => ({
  type: CardConstants.REQUEST_EXPANSION_CARDS,
  id
});

const requestCard = (id) => ({
  type: CardConstants.REQUEST_CARD,
  id
});

const receiveExpansionCards = (cards) => ({
  type: CardConstants.RECEIVE_EXPANSION_CARDS,
  cards
});

const receiveCard = (card) => ({
  type: CardConstants.RECEIVE_CARD,
  card
});

const clearCard = () => ({
  type: CardConstants.CLEAR_CARD
});

export { CardConstants, requestExpansionCards, requestCard, receiveExpansionCards, receiveCard, clearCard };
