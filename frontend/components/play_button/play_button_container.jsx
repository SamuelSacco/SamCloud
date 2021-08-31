import { connect } from 'react-redux';
import { pauseSong, playSong, receiveCurrentSong } from '../../actions/playbar_actions';
import PlayButton from './play_button';

const mSTP = (state) => {
    return ({
        playing: state.ui.playbar.playing,
        currentSong: state.ui.playbar.currentSong,
        currentUser: state.session,
    })
}

const mDTP = (dispatch) => {
    return ({
        // receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
        playSong: (song) => dispatch(playSong(song)),
        pauseSong: (song) => dispatch(pauseSong(song))
    })
}

export default connect(mSTP, mDTP)(PlayButton);