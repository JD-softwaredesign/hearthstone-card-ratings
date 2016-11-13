import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { SessionConstants, signOut } from './actions/session_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {
    session: {
      username: undefined,
      ratings: {},
      id: undefined
    },
    expansions: {
      current: {id: undefined, title: ''},
      index: []
    },
    cards: [],
    card: {id: undefined,
           name: '',
           attack: 0,
           card_text: '',
           expansion_id: undefined,
           health: 0,
           hero_class: '',
           image_url: '',
           mana: 0,
           released: false,
           tribe: ''}
  };
  if (window.currentUser) {
    preloadedState.session = window.currentUser.user;
  }
  const store = window.store = configureStore(preloadedState);

  // this is for testing
  window.signOut = () => {
    store.dispatch(signOut());
  };


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
