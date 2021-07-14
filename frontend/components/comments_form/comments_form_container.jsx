import { connect } from "react-redux";
import { createComment } from "../../actions/comments_actions";
import CommentsForm from "./comments_form";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments,
    comment: {
        body: "",
        user_id: currentUser.id,
        song_id: ownProps.match.params.songId
    }
});

const mapDispatchToProps = dispatch => ({
    createComment: track => dispatch(createComment(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm);