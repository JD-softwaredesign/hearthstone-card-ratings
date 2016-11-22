import Comment from './comment.jsx';
import { connect } from 'react-redux';
import { deleteCardComment } from './../../actions/comment_actions.js';

const mapStateToProps = (state) => ({
  username: state.session.username
});

const mapDispatchToProps = (dispatch) => ({
  deleteCardComment: (commentId) => dispatch(deleteCardComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
