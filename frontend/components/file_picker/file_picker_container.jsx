import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';
import FilePicker from './file_picker'
import { requestSongs } from '../../actions/song_actions';

const mSTP = (state) => ({
    currentUserId: state.session.id,
});

const mDTP = dispatch => ({
    createSong: song => dispatch(createSong(song)),
});

export default connect(mSTP, mDTP)(FilePicker);