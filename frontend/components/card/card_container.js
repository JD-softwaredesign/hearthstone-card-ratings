import Card from './card.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  card: state.card,
  user: state.session
});

export default connect(mapStateToProps)(Card);
