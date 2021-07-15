import { connect } from "react-redux";
import { updateComment, requestComment } from "../../actions/comments_actions";
import EditCommentsForm from "./edit_comments";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: state.entities.comments[ownProps.match.params.commentId]
});

const mapDispatchToProps = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment)),
    requestComment: commentId => dispatch(requestComment(commentId))
});

export default (connect(mapStateToProps, mapDispatchToProps)(EditCommentsForm));