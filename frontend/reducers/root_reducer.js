import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import ErrorReducer from './error_reducer.js';
import ExpansionReducer from './expansion_reducer.js';


const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  expansions: ExpansionReducer
});

export default RootReducer;
