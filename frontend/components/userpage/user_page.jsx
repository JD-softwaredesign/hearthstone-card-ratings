import React from 'react';
import { withRouter } from 'react-router';
import { fetchUser } from '../../util/session_api_util.js';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      user_ratings: {},
      id: undefined
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const { session, params } = this.props;
    if (this.state.id === Number(params.id)) { return; }
    let fetchUserSuccess = (user) => {
      user = user.user;
      this.setState({username: user.username, user_ratings: user.user_ratings, id: user.id});
    };
    let fetchUserError = (error) => {
      this.props.router.push('/');
    };
    if (Number(params.id) === session.id) {
      this.setState({username: session.username, user_ratings: session.user_ratings, id: session.id});
    } else {
      fetchUser(params.id, fetchUserSuccess, fetchUserError);
    }
  }

  goToCard(id) {
    this.props.router.push(`/cards/${id}`);
  }

  renderRatings() {
    let user = this.state;
    let rated = this.props.cards.filter((card) => user.user_ratings[card.id]);
    return rated.map((card) => {
      return <li key={card.name}>
        <p className="card_link" onClick={ this.goToCard.bind(this, card.id) }>{card.name}</p>
        <p>{user.user_ratings[card.id]}</p>
      </li>;
    });
  }

  render() {
    return <div className="userpage">
      <h1>{`${this.state.username}'s Ratings`}</h1>
      <ul>
        { this.renderRatings() }
      </ul>
    </div>;
  }
}

export default withRouter(UserPage);
