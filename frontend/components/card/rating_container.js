import Rating from './rating.jsx';
import { connect } from 'react-redux';
import { receiveRating } from './../../actions/session_actions.js';

const mapStateToProps = (state) => ({
  card: state.card,
  rating: state.session.rating,
  arena_rating: state.session.arena_rating
});

const mapDispatchToProps = (dispatch) => ({
  receiveRating: (rating) => dispatch(receiveRating(rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
