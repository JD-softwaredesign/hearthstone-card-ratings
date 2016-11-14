import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return action.user;
    case SessionConstants.SIGN_OUT:
      return {username: undefined, user_ratings: {}};
    case SessionConstants.RECEIVE_RATING:
      let newState = merge({}, state);
      let key = Object.keys(action.rating)[0];
      newState.user_ratings[key] = action.rating[key];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
