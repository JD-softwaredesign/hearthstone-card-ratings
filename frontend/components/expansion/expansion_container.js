import Expansion from './expansion.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  current: state.expansions.current,
  cards: state.cards,
  rating: state.session.rating,
  arena_rating: state.session.arena_rating
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Expansion);
