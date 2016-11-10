import SignUpForm from './sign_up_form.jsx';
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions.js';

const mapStateToProps = (state) => ({
  username: state.session.username,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
