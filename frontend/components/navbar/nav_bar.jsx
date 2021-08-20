import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        
    }

    render (){
        return (
            <div className="navBar">
                {/* <Link to="/" className="header-link">
                    <h1>SamCloud</h1>
                </Link> */}
                {this.props.currentUser ? 
                    <div className="modal-test">
                        <button className="sign-in button" onClick={() => this.props.logout()}>
                            Log out
                        </button>
                    </div>
                :
                    <div className="link-wrapper">
                        <button className="sign-in button" onClick={() => this.props.openModal('Sign in')}>
                            Sign In
                        </button>
                        <br />
                        <button className="sign-up button" onClick={() => this.props.openModal('Sign up')}>
                            Create account
                        </button>
                        <button className="for-creators button">
                            For Creators
                        </button>
                    </div>
                }

            </div>
        )
    }
}

export default NavBar;