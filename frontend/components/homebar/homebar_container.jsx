import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import HomeBar from './homebar';

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
};

const mDTP = dispatch => {
    return {
        otherForm: (
            <button onClick={() => dispatch(openModal('Sign in'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        openModal: (formType) => dispatch(openModal(formType)),
        logout: () => dispatch(logout())
    };
};

export default connect(mSTP, mDTP)(HomeBar);