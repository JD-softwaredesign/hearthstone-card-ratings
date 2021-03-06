import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';
import App from './app';
import SignUpFormContainer from './session/sign_up_form_container.js';
import SignInFormContainer from './session/sign_in_form_container.js';
import ExpansionContainer from './expansion/expansion_container.js';
import CardContainer from './card/card_container.js';
import { clearErrors } from '../actions/error_actions.js';
import { requestExpansions } from './../actions/expansion_actions.js';
import { requestExpansionCards, requestCard, clearCard } from './../actions/card_actions.js';
import UserPageContainer from './userpage/user_page_container.js';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._clearErrorsWhenLeave = this._clearErrorsWhenLeave.bind(this);
    this._ensureSignedIn = this._ensureSignedIn.bind(this);
    this._initialFetch = this._initialFetch.bind(this);
    this._fetchCard = this._fetchCard.bind(this);
    this._clearCard = this._clearCard.bind(this);
  }

  _initialFetch() {
    let store = this.context.store;
    if (!store.getState().expansions.index.length) {
      store.dispatch(requestExpansions());
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    if (window.currentUser) {
      replace('/');
    }
  }

  _clearErrorsWhenLeave() {
    this.context.store.dispatch(clearErrors());
  }

  _ensureSignedIn(nextState, replace){
    if (!window.currentUser) {
      replace('/signin');
    }
  }

  _fetchCard(nextState, replace){
    this._ensureSignedIn(nextState, replace);
    this.context.store.dispatch(requestCard(nextState.params.id));
  }

  _clearCard(){
    this.context.store.dispatch(clearCard());
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={ App } onEnter={ this._initialFetch }>
          <IndexRoute component={ ExpansionContainer }
            onEnter={ this._ensureSignedIn }></IndexRoute>
          <Route path="signup" component={SignUpFormContainer}
            onEnter={ this._redirectIfLoggedIn }
            onLeave={ this._clearErrorsWhenLeave } />
          <Route path="signin" component={SignInFormContainer}
            onEnter={ this._redirectIfLoggedIn }
            onLeave={ this._clearErrorsWhenLeave } />
          <Route path="cards/:id" component={ CardContainer }
            onEnter={ this._fetchCard }
            onLeave={ this._clearCard }/>
          <Route path=":id" component={ UserPageContainer }/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};


export default AppRouter;
