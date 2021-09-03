import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pauseSong, playSong, loopSong, restartSong, setTime, setVolume } from '../../actions/playbar_actions';
import { updateSong } from '../../actions/song_actions';
import PlayBar from './playbar';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    currentSong: state.ui.playbar.currentSong,
    songAudioObject: state.ui.playbar.songAudioObject,
    playing: state.ui.playbar.playing,
    currentTime: state.ui.playbar.songAudioObject ? state.ui.playbar.songAudioObject.currentTime : 0,
    ownProps: ownProps
});

const mDTP = dispatch => ({
    playSong: (song) => dispatch(playSong(song)),
    pauseSong: (song) => dispatch(pauseSong(song)),
    loopSong: (setLoop) => dispatch(loopSong(setLoop)),
    restartSong: () => dispatch(restartSong()),
    setTime: (time) => dispatch(setTime(time)),
    setVolume: (volume) => dispatch(setVolume(volume)),
    // updateSong: (song) => dispatch(updateSong(song))
});


export default withRouter(connect(mSTP, mDTP)(PlayBar));