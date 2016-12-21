import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return action.user;
    case SessionConstants.SIGN_OUT:
      return {username: undefined,
      rating: "",
      arena_rating: "",
      id: undefined};
    case SessionConstants.RECEIVE_RATING:
      let newState = merge({}, state);
      let { type, card_id, rating } = action.rating;
      let oldRating = newState[type];
      let idx = Number(card_id) - 1;
      let newRating = oldRating.slice(0, idx) + rating + oldRating.slice(idx+1);
      newState[type] = newRating;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
