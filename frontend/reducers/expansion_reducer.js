import { ExpansionConstants } from '../actions/expansion_actions.js';
import merge from 'lodash/merge';

const ExpansionReducer = (state={}, action) => {
  switch (action.type) {
    case ExpansionConstants.RECEIVE_EXPANSIONS:
      return action.expansions;
    case ExpansionConstants.UPDATE_CURRENT:
      let newState = merge({}, state);
      newState.current = state.index[action.id-1];
      return newState;
    default:
      return state;
  }
};

export default ExpansionReducer;
