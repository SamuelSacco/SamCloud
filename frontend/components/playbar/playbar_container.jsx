import { connect } from 'react-redux';
import { pauseSong, playSong, loopSong, restartSong } from '../../actions/playbar_actions';
import PlayBar from './playbar';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    currentSong: state.ui.playbar.currentSong,
    songAudioObject: state.ui.playbar.songAudioObject,
    playing: state.ui.playbar.playing,
});

const mDTP = dispatch => ({
    playSong: (song) => dispatch(playSong(song)),
    pauseSong: (song) => dispatch(pauseSong(song)),
    loopSong: (setLoop) => dispatch(loopSong(setLoop)),
    restartSong: () => dispatch(restartSong())
});

export default connect(mSTP, mDTP)(PlayBar);