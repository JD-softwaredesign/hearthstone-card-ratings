import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { SessionConstants, signOut } from './actions/session_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {
    session: {
      currentUser: undefined,
      signedIn: false
    },
    expansions: {
      current: {id: undefined, title: ''},
      index: []
    },
    cards: [],
    card: undefined
  };
  if (window.currentUser) {
    preloadedState.session = {
      currentUser: window.currentUser.user,
      signedIn: true
    };
  }
  const store = window.store = configureStore(preloadedState);

  // this is for testing
  window.signOut = () => {
    store.dispatch(signOut());
  };


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
