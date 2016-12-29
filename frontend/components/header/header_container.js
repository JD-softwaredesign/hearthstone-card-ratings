import Header from './header.jsx';
import { connect } from 'react-redux';
import { signOut } from './../../actions/session_actions.js';
import { requestExpansionCards } from './../../actions/card_actions.js';

const mapStateToProps = (state) => ({
  expansions: state.expansions.index,
  current: state.expansions.current,
  username: state.session.username,
  userId: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  requestExpansionCards: (id) => dispatch(requestExpansionCards(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
