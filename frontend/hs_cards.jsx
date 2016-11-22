import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {
    session: {
      username: undefined,
      user_ratings: {},
      id: undefined
    },
    expansions: {
      current: {id: undefined, title: '', image_url: ''},
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
           tribe: '',
           card_comments: []}
  };
  if (window.currentUser) {
    preloadedState.session = window.currentUser.user;
  }
  const store = window.store = configureStore(preloadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
