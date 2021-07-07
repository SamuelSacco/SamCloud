import { connect } from 'react-redux';
import { createSong } from '../../util/song_api_util';
import FilePicker from './file_picker'

const mSTP = (state) => ({
    currentUser: "1"
});

const mDTP = dispatch => ({
    createSong: song => dispatch(createSong(song))
});

export default connect(mSTP, mDTP)(FilePicker);