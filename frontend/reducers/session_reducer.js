import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return action.user;
    case SessionConstants.SIGN_OUT:
      return {username: undefined, ratings: {}};
    default:
      return state;
  }
};

export default SessionReducer;
