import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';
import ExpansionMiddleware from './expansion_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ExpansionMiddleware
);

export default RootMiddleware;
