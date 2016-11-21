import Expansion from './expansion.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  current: state.expansions.current,
  cards: state.cards,
  user_ratings: state.session.user_ratings
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Expansion);
