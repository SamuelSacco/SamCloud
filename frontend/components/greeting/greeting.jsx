import React from 'react';

const Greeting = (props) => {

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
            <button className="header-button" onClick={props.logout}>Log Out</button>
        </hgroup>
    );

    return (
        props.currentUser ?
            personalGreeting(props.currentUser, props.logout) :
            <div></div>
    );
};

export default Greeting;
