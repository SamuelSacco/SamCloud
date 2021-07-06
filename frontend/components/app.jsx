import React from 'react'
import { Switch, Route } from 'react-router';
import CreateAccountContainer from './user_auth/CreateAccountContainer';
import SignInContainer from './user_auth/SignInContainer';
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        <header>
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