import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  homeLink() {
    if (this.props.location.pathname !== '/') {
      this.props.router.push('/');
    }
  }

  userPageLink() {
    this.props.router.push(`/${this.props.userId}`);
  }


  renderExpansionSelect() {
    if (this.props.expansions.length) {
      return <select
        defaultValue={this.props.current.id}
        onChange={ (e) => {
          this.props.requestExpansionCards(e.target.value);
          this.homeLink();
        } }>
        { this.props.expansions.map((el) => {
          return <option key={el.title} value={el.id}>{el.title}</option>;
        })}
      </select>;
    }
  }

  render () {
    if (['/signin', '/signup'].includes(this.props.location.pathname)) {
      return <div></div>;
    } else {
      return (
        <header>
          <div className='logo'
            onClick={ this.homeLink.bind(this) }>
            <img src="http://i.imgur.com/nmRzqIk.png"></img>
            <h1>HearthCard Ratings</h1>
          </div>
          <div className='user-nav'>
            <div onClick={ this.userPageLink.bind(this) }>{ this.props.username }</div>
            <Link onClick={ this.props.signOut }>Logout</Link>
          </div>
          {this.renderExpansionSelect() }
        </header>
      );
    }
  }
}

export default withRouter(Header);
