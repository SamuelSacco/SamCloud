import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        navLink: <Link to="/login">Already have an account? Log in here!</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Sign in'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user)) // for logging in demo user
    };
};

export default connect(mSTP, mDTP)(SessionForm);