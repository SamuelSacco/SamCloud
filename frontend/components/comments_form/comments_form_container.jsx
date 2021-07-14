import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createComment } from "../../actions/comments_actions";
import CommentsForm from "./comments_form";
const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments,
    comment: {
        body: "",
        user_id: state.session.id,
        song_id: ownProps.match.params.songId
    }
});

const mapDispatchToProps = dispatch => ({
    createComment: track => dispatch(createComment(track))
});
// 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsForm));
// export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm);