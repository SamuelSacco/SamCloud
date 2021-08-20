import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { deleteSong, requestSongs } from '../../actions/song_actions';
import Splash from './splash';

const mSTP = (state, ownProps) => {
    return ({
        songs: Object.values(state.entities.songs),
        currentUserId: state.session.id,
        test: ownProps
    })
}

const mDTP = (dispatch) => {
    return ({
        requestSongs: () => dispatch(requestSongs()),
        deleteSong: (songId) => dispatch(deleteSong(songId)),
        openModal: (formType) => dispatch(openModal(formType)),
    })
}

export default connect(mSTP, mDTP)(Splash)