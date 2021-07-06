import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignInFormContainer from '../user_auth/signin_container';
import SignUpFormContainer from '../user_auth/signup_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'Sign in':
            component = <SignInFormContainer />;
            break;
        case 'Sign up':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;