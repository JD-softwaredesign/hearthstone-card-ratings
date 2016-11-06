const ExpansionConstants = {
  REQUEST_EXPANSIONS: "REQUEST_EXPANSIONS",
  RECEIVE_EXPANSIONS: "RECEIVE_EXPANSIONS"
};

const requestExpansions = () => ({
  type: ExpansionConstants.REQUEST_EXPANSIONS
});

const receiveExpansions = (expansions) => ({
  type: ExpansionConstants.RECEIVE_EXPANSIONS,
  expansions
});

export { ExpansionConstants, requestExpansions, receiveExpansions };
