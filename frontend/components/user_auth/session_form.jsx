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
            email: '',
            password: '',
            username: '',
            fname: '',
            lname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            this.setState({
                email: '',
                password: '',
                username: '',
                fname: '',
                lname: ''
            })

            this.props.closeModal
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
        const signupNames = () => {
            return (
                <>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br />
                    <label>First name:
                        <input type="text" value={this.state.fname} onChange={this.update('fname')} />
                    </label>
                    <br />
                    <label>Last Name:
                        <input type="text" value={this.state.lname} onChange={this.update('lname')} />
                    </label>
                </>
            )
        }

        return (
            <div>
                {/* <h1>
                    <Link to='/' className={"logo"} >
                        SamCloud
                    </Link>
                </h1> */}
                <form onSubmit={this.handleSubmit} className={"centered"}>
                    <h2>
                        {this.props.formType}
                    </h2>
                    {this.renderErrors()}
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <br />

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br />
                    {this.props.formType === 'Sign up' ? signupNames() : ''}
                    <input type="submit" value={this.props.formType} />
                    <br />
                    {this.props.otherForm}
                </form>
            </div>
        )
    }
}

export default SessionForm