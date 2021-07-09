import React from 'react';

class Greeting extends React.Component{
    constructor(props){
        super(props)
    }
    // console.log("greeting", props)

    componentDidMount(){
        this.props.requestSongs()
    }
    
    render (){
        
        const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
            {/* <button className="header-button" onClick={this.props.logout}>Log Out</button> */}
        </hgroup>)

        return (
            this.props.currentUser ?
                personalGreeting(this.props.currentUser, this.props.logout) :
                <div></div>
        );
       } 
};

export default Greeting;
