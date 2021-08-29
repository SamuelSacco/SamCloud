import { connect } from 'react-redux';
import { pauseSong, playSong, receiveCurrentSong } from '../../actions/playbar_actions';
import PlayBar from './playbar';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing,
});

const mDTP = dispatch => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong())

});

export default connect(mSTP, mDTP)(PlayBar);