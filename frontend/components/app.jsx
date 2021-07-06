import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import CreateAccountContainer from './user_auth/CreateAccountContainer';
import SignInContainer from './user_auth/SignInContainer';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>SamCloud</h1>
            </Link>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={SignInContainer} />
            <AuthRoute exact path="/signup" component={CreateAccountContainer} />
        </Switch>
    </div>
);

export default App;