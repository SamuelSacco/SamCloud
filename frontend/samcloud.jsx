import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import { createComment, receiveComment } from './actions/comments_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.signup = signup
    window.login = login
    window.logout = logout
    window.store = store
    window.dispatch = store.dispatch
    window.createComment = createComment


    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});