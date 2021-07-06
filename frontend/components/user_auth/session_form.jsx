import React from 'react'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            this.setState({
                email: '',
                password: ''
            })
        })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    render() {

        return (
            <>
                <h1>
                    <Link to='/' className={"logo"} >
                        SamCloud
                    </Link>
                </h1>
                <form onSubmit={this.handleSubmit} className={"centered"}>
                    {this.props.formType} or {this.props.navLink} here
                    {this.renderErrors()}
                    <br />
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br />

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br />
                    {this.props.formType === 'Sign up' ? signupNames() : ''}
                    <input type="submit" value={this.props.formType} />
                </form>
            </>
        )
    }
}

export default SessionForm