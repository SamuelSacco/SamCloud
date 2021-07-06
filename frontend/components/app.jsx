import React from 'react'
import { Switch, Route } from 'react-router';
import CreateAccountContainer from './user_auth/CreateAccountContainer';
import SignInContainer from './user_auth/SignInContainer';
import { Link } from 'react-router-dom';
import NavBarContainer from './navbar/navBarContainer';

const App = () => (
    <div>
        <header>
            <img src={window.background} alt="logo" />
            <Link to="/" className="header-link">
                <h1>SamCloud</h1>
            </Link>
        </header>
        <Switch>
            <Route>exact path="/" component={navBarContainer}</Route>
            <Route exact path="/login" component={SignInContainer} />
            <Route exact path="/signup" component={CreateAccountContainer} />
        </Switch>
    </div>
);

export default App;