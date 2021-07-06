import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        navLink: <Link to="/signup">Don't have an account? Sign up here!</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Sign up'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionForm);