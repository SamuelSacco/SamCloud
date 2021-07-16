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
        this.handleDemoUserSubmit = this.handleDemoUserSubmit.bind(this);
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
                password: '',
                username: '',
                fname: '',
                lname: ''
            })

            this.props.closeModal()
        }) 
    }

    handleDemoUserSubmit(e) {
        e.preventDefault();
        const demoUser = { username: "Sam", password: "123456" };
        this.props.closeModal()

        if (this.props.formType === "Sign up") {
            this.props.login(demoUser)
        } else {
            this.props.processForm(demoUser);
        }
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
                    <label>
                        <input placeholder="  Email" className="email-sign-up" type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <label>
                        <input placeholder="  First name" className="email-sign-up" type="text" value={this.state.fname} onChange={this.update('fname')} />
                    </label>
                    <label>
                        <input placeholder="  Last name" className="email-sign-up" type="text" value={this.state.lname} onChange={this.update('lname')} />
                    </label>
                </>
            )
        }

        return (
            <div className="sign-in-wrapper">
                <form onSubmit={this.handleSubmit} className="sign-in-centered">

                    <div className="demo-user-wrapper">
                        <button onClick={this.handleDemoUserSubmit} className="demo-user-1">
                            Continue with Demo User 1
                        </button>
                        <button onClick={this.handleDemoUserSubmit} className="demo-user-2">
                            Continue with Demo User 2
                        </button>
                        <button onClick={this.handleDemoUserSubmit} className="demo-user-3">
                            Continue with Demo User 3
                        </button>
                        
                        {<h1 className="log-in">{this.props.formType}</h1>}
                        
                        <label>
                            <input 
                            className="username-sign-in" 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.update('username')} 
                            placeholder="  Enter your username"
                            />
                        </label>

                        <label>
                            <input 
                            className="password-sign-in"
                            type="password" 
                            value={this.state.password} 
                            onChange={this.update('password')} 
                            placeholder="  Enter your password"
                            />
                        </label>

                        {this.props.formType === 'Sign up' ? signupNames() : ''}

                        <button className="continue-sign-in">
                            Continue
                        </button>
                        {/* <input 
                        type="submit" 
                        value={this.props.formType} 
                        /> */}
                        {/* other form button */}
                        {/* {this.props.otherForm} */}
                        <div>
                            {
                                this.props.formType === 'Sign In' ? 
                                <div className="warning-text">
                                <br />
                                <p>
                                    We may use your email and devices for updates and tips on SamCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
                                </p>
                                <br />
                                <p>
                                    We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.
                                </p>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>

                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default SessionForm