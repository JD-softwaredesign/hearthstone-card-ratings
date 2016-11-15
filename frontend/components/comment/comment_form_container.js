import CommentForm from './comment_form.jsx';
import { connect } from 'react-redux';
import { newCardComment } from './../../actions/comment_actions.js';

const mapStateToProps = (state) => ({
  userId: state.session.id,
  cardId: state.card.id
});

const mapDispatchToProps = (dispatch) => ({
  newCardComment: (comment) => dispatch(newCardComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
