import { ExpansionConstants } from '../actions/expansion_actions.js';

const ExpansionReducer = (state={}, action) => {
  switch (action.type) {
    case ExpansionConstants.RECEIVE_EXPANSIONS:
      return action.expansions;
    default:
      return state;
  }
};

export default ExpansionReducer;
