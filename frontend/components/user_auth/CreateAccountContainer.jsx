import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './SessionForm';
import { signup, login } from '../../actions/session_actions';

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
        login: (user) => dispatch(login(user))
    };
};

export default connect(mSTP, mDTP)(SessionForm);