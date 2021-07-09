import { connect } from 'react-redux';
import { deleteSong, requestSongs } from '../../actions/song_actions';
import SongIndex from './song_index';

const mSTP = (state) => {
    return ({
        songs: Object.values(state.entities.songs)
    })
}

const mDTP = (dispatch) => {
    return ({
        requestSongs: () => dispatch(requestSongs()),
        deleteSong: (songId) => dispatch(deleteSong(songId))
    })
}

export default connect(mSTP, mDTP)(SongIndex)