import React from 'react';
import { withRouter } from 'react-router';
import { fetchUser } from '../../util/session_api_util.js';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      rating: "",
      arena_rating: "",
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
      this.setState({username: user.username, rating: user.rating, arena_rating: user.arena_rating, id: user.id});
    };
    let fetchUserError = (error) => {
      this.props.router.push('/');
    };
    if (Number(params.id) === session.id) {
      this.setState({username: session.username, rating: session.rating, arena_rating: session.arena_rating, id: session.id});
    } else {
      fetchUser(params.id, fetchUserSuccess, fetchUserError);
    }
  }

  goToCard(id) {
    this.props.router.push(`/cards/${id}`);
  }

  renderRatings() {
    let user = this.state;
    let rated = this.props.cards.filter((card) => Number(user.rating[card.id-1]) || Number(user.arena_rating[card.id-1]));
    return rated.map((card) => {
      return <tr key={card.name}>
        <td><p className="card_link" onClick={ this.goToCard.bind(this, card.id) }>{card.name}</p></td>
        <td>{user.rating[card.id-1] === '0' ? "" : user.rating[card.id-1] }</td>
        <td>{user.arena_rating[card.id-1] === '0' ? "" : user.arena_rating[card.id-1] }</td>
      </tr>;
    });
  }

  render() {
    return <div className="userpage">
      <h1>{`${this.state.username}'s Ratings`}</h1>
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Standard</th>
            <th>Arena</th>
          </tr>
        </thead>
        <tbody>
        { this.renderRatings() }
        </tbody>
      </table>
    </div>;
  }
}

export default withRouter(UserPage);
