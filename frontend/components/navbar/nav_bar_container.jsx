import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';

const mSTP = ({ errors }) => {
    return({

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
        openModal: () => dispatch(openModal('Sign in'))
    };
};

export default connect(mSTP, mDTP)(NavBar);