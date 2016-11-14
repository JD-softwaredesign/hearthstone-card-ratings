import Comments from './comments.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  comments: state.card.card_comments
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
