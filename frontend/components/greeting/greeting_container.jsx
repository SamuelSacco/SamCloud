import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';
import { requestSongs } from '../../actions/song_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    requestSongs: () => dispatch(requestSongs())
});

export default connect(mSTP, mDTP)(Greeting);