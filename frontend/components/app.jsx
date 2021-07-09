import React from 'react'
import { Switch, Route } from 'react-router';
import CreateAccountContainer from './user_auth/signup_container';
import SignInContainer from './user_auth/signin_container';
import { Link } from 'react-router-dom';
import ModalContainer from './modal/modal_container';
import NavBarContainer from './navbar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import FilePicker from './file_picker/file_picker_container'
import AudioPlayer from './audio_player/audio_player';
// import ProfileHeaderContainer from './user_show_page/profile_header_container';

const App = () => (
    <div>
        <AudioPlayer />
        <GreetingContainer />
        <ModalContainer />
        <NavBarContainer />
        <header>
            <img src={window.background} alt="logo" />
        </header>
        <Switch>
            {/* <Route exact path="/users/:userId" component={ProfileHeaderContainer}/> */}
            <Route exact path="/" />
            <Route exact path="/login" component={SignInContainer} />
            <Route exact path="/signup" component={CreateAccountContainer} />
            <Route exact path="/addsong/:userId" component={FilePicker}/>
        </Switch>
        <FilePicker />
        
    </div>
);

export default App;