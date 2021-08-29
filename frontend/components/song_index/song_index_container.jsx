import { connect } from 'react-redux';
import { pauseSong, playSong, receiveCurrentSong } from '../../actions/playbar_actions';
import { deleteSong, requestSongs } from '../../actions/song_actions';
import SongIndex from './song_index';

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
        receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong())
    })
}

export default connect(mSTP, mDTP)(SongIndex);