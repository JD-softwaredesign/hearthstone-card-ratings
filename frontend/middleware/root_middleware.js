import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';
import ExpansionMiddleware from './expansion_middleware.js';
import CardMiddleware from './card_middleware.js';
import CommentMiddleware from './comment_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ExpansionMiddleware,
  CardMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
