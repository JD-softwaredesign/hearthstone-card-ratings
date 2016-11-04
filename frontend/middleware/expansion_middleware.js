import { ExpansionConstants, receiveExpansions } from '../actions/expansion_actions.js';
import { fetchExpansions } from '../util/expansion_api_util.js';

const ExpansionMiddleware = (store) => (next) => (action) => {
  const fetchSuccess = (expansions) => {
    store.dispatch(receiveExpansions(expansions));
  };
  switch (action.type) {
    case ExpansionConstants.REQUEST_EXPANSIONS:
      fetchExpansions(fetchSuccess);
      break;
    default:
      return next(action);
  }
};

export default ExpansionMiddleware;
