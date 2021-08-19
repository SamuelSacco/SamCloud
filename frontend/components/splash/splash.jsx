import React, { Component } from 'react'
import NavBarContainer from '../navbar/nav_bar_container'
import SongFormContainer from '../song_form/song_form_container'
import { Link } from 'react-router-dom'
import SongIndexContainer from '../song_index/song_index_container'

export default class Splash extends Component {
    render() {
        return (
            <div className="width-wrapper">
                <div className="carousel-photo">
                    <div className="header">

                        <div>
                            {/* Dummy */}
                        </div>

                        <div className="nav-bar-wrap">
                            <NavBarContainer/>
                            {/* <button className="header-button">Sign in</button>
                            <button className="header-button">Create Account</button> */}
                        </div>
                    </div>

                    <div className="header-center">
                        <div className="header-text">
                            <h2 className="h1-text">What's next in music is first on SamCloud</h2>
                            <br />
                            <h2 className="h2-text">Upload your first track and begin your journey. SamCloud gives you space to create, find your fans, and connect with other artists.</h2>
                            <br />
                            <a href="https://samcloud-app.herokuapp.com/#/songs/new">
                                <button className="start-upload button">Start uploading today
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                    <div className="songs-index-container">
                    <h1 className="songs-header-text">Hear what’s trending for free in the SamCloud community</h1>
                        <SongIndexContainer />
                    </div>
            </div>
        )
    }
}