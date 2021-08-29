import { connect } from "react-redux";
import { createLike, deleteLike, fetchLike } from "../../util/like_api_util";
import LikeButton from "./like_button";


const mSTP = (state) => {
    return({
        currentUser: state.entities.users[state.session.id],
        currentSong: state.ui.playbar.currentSong
    })
}

const mDTP = (dispatch) => {
    return({
        fetchLike: (like) => fetchLike(like),
        createLike: (like) => createLike(like),
        deleteLike: (like) => deleteLike(like) 
    })
}

export default connect(mSTP, mDTP)(LikeButton);