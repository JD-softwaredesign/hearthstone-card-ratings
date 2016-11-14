import Expansion from './expansion.jsx';
import { connect } from 'react-redux';
import { receiveRating } from './../../actions/session_actions.js';

const mapStateToProps = (state) => ({
  userId: state.session.id,
  user_ratings: state.session.user_ratings,
  current: state.expansions.current,
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  receiveRating: (rating) => dispatch(receiveRating(rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(Expansion);
