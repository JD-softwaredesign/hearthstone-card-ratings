import Card from './card.jsx';
import { connect } from 'react-redux';
import { receiveRating } from './../../actions/session_actions.js';

const mapStateToProps = (state) => ({
  card: state.card,
  userId: state.session.id,
  user_ratings: state.session.user_ratings
});

const mapDispatchToProps = (dispatch) => ({
  receiveRating: (rating) => dispatch(receiveRating(rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
