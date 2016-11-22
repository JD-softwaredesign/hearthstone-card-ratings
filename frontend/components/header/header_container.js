import Header from './header.jsx';
import { connect } from 'react-redux';
import { signOut } from './../../actions/session_actions.js';

const mapStateToProps = (state) => ({
  username: state.session.username,
  userId: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
