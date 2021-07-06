import React from 'react'
import { Switch, Route } from 'react-router';
import CreateAccountContainer from './user_auth/signup_container';
import SignInContainer from './user_auth/signin_container';
import { Link } from 'react-router-dom';
import ModalContainer from './modal/modal_container';
import NavBarContainer from './navbar/nav_bar_container';

const App = () => (
    <div>
        <ModalContainer />
        <NavBarContainer/>
        <header>
            <img src={window.background} alt="logo" />
            <Link to="/" className="header-link">
                <h1>SamCloud</h1>
            </Link>
        </header>
        <Switch>
            <Route exact path="/login" component={SignInContainer} />
            <Route exact path="/signup" component={CreateAccountContainer} />
        </Switch>
    </div>
);

export default App;