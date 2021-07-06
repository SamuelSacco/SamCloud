import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        
    }

    render (){
        // debugger
        return (
            <>
                <button onClick={() => this.props.openModal('Sign in')}>
                    Sign In
                </button>

                <button onClick={() => this.props.openModal('Sign up')}>
                    Sign Up
                </button>

                <button onClick={() => this.props.logout()}>
                    Log out
                </button>
            </>
        )
    }
}

export default NavBar;