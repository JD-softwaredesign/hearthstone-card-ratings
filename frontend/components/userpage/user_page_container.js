import UserPage from './user_page.jsx';
import { connect } from 'react-redux';
const mapStateToProps = (state) => ({
  cards: state.cards,
  session: state.session
});

export default connect(mapStateToProps)(UserPage);
