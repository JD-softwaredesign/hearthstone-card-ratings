const ExpansionConstants = {
  REQUEST_EXPANSIONS: "REQUEST_EXPANSIONS",
  RECEIVE_EXPANSIONS: "RECEIVE_EXPANSIONS",
  UPDATE_CURRENT: "UPDATE_CURRENT"
};

const updateCurrent = (id) => ({
  type: ExpansionConstants.UPDATE_CURRENT,
  id
});

const requestExpansions = () => ({
  type: ExpansionConstants.REQUEST_EXPANSIONS
});

const receiveExpansions = (expansions) => ({
  type: ExpansionConstants.RECEIVE_EXPANSIONS,
  expansions
});

export { ExpansionConstants, requestExpansions, receiveExpansions, updateCurrent };
