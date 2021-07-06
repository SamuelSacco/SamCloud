import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './SessionForm';
SessionForm
import { login } from '../../actions/session_actions';

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
        login: (user) => dispatch(login(user))
    };
};

export default connect(mSTP, mDTP)(SessionForm);