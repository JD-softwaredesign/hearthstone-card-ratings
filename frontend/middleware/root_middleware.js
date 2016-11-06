import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';
import ExpansionMiddleware from './expansion_middleware.js';
import CardMiddleware from './card_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ExpansionMiddleware,
  CardMiddleware
);

export default RootMiddleware;
