import Card from './card.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  card: state.card,
  user: state.session
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
