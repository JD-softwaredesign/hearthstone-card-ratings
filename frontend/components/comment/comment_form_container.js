import CommentForm from './comment_form.jsx';
import { connect } from 'react-redux';
import { createCardComment } from '../../actions/comment_actions.js';


const mapStateToProps = (state) => ({
  user_id: state.session.id,
  card_id: state.card.id
});

const mapDispatchToProps = (dispatch) => ({
  createCardComment: (comment) => dispatch(createCardComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
