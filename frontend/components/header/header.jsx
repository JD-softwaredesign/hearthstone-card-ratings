import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  homeLink() {
    this.props.router.push('/');
  }

  signOutHandler() {
    this.props.signOut(() => this.props.router.push('/signin'));
  }

  showButton() {
    if (this.props.username !== undefined) {
      return <button onClick={ this.signOutHandler.bind(this) }>
        Logout</button>;
    }
  }

  render () {
    return (
      <header>
        <h1 onClick={ this.homeLink.bind(this) }>Home</h1>
        { this.showButton() }
      </header>
    );
  }
}

export default withRouter(Header);
