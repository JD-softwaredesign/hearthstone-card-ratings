import Expansion from './expansion.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  ratings: state.session.ratings,
  current: state.expansions.current,
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Expansion);
