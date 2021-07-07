import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        
    }

    render (){
        return (
            <>
                <Link to="/" className="header-link">
                    <h1>SamCloud</h1>
                </Link>
                {this.props.currentUser ? 
                <div>
                    <button onClick={() => this.props.logout()}>
                        Log out
                    </button>
                </div>
                :
                <div>
                    <button onClick={() => this.props.openModal('Sign in')}>
                        Sign In
                    </button>

                    <button onClick={() => this.props.openModal('Sign up')}>
                        Sign Up
                    </button>
                </div>
                }

            </>
        )
    }
}

export default NavBar;