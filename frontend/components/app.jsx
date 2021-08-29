import React from 'react'
import { Switch, Route } from 'react-router';
import CreateAccountContainer from './user_auth/signup_container';
import SignInContainer from './user_auth/signin_container';
import { Link } from 'react-router-dom';
import ModalContainer from './modal/modal_container';
import NavBarContainer from './navbar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import FilePicker from './file_picker/file_picker_container'
import SongFormContainer from './song_form/song_form_container';
import SongIndexContainer from './song_index/song_index_container';
import SongIndexItem from './song_index/song_index_item';
import Splash from './splash/splash';
import SongShowContainer from './song_index/song_show_container';
import AudioPlayer from './audio_player/audio_player';
// import EditCommentsForm from './comments_form/edit_comments';
import EditCommentsContainer from './comments_form/edit_comments_form_container';
import SplashContainer from './splash/splash_container';
import Topbar from './topbar/topbar';
import PlaybarContainer from './playbar/playbar_container';

const App = () => (
    <div className="app">
        {/* <Test/> */}
        {/* <SongFormContainer/> */}
        {/* <NavBarContainer /> */}
        {/* <GreetingContainer/> */}

        <PlaybarContainer />
        <ModalContainer />
        
        {/* <Splash /> */}
        {/* <AudioPlayer /> */}
        <Switch>
            <Route exact path="/" component={SplashContainer}></Route>
            <Route exact path="/songs" component={SongIndexContainer} />
            <Route exact path="/login" component={SignInContainer} />
            <Route exact path="/signup" component={CreateAccountContainer} />
            <Route exact path="/songs/new" component={SongFormContainer} />
            <Route exact path="/users/:userId" component={SongFormContainer} />
            <Route exact path="/songs/:songId" component={SongShowContainer} />
            <Route exact path="/wavetest" component={AudioPlayer} />
            <Route exact path="/test" component={Topbar}></Route>
        </Switch>
    </div>
);

export default App;