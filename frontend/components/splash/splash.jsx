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

                        <div className="logo-text-wrapper">
                            <img className="header-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAsCAQAAAAwC3WkAAACUklEQVR4Ae2YA4wdURSGv+fattu4MWrbtu24bqOacWrbjNHYrm3bOF3vSXrzOpM7d3c22e8k31P03//ME0WdCM6QsvSlNS1pQGV+8JxnPOEKlyM3CD9SVjbJFzFzV1ZKJcKMVJBrkp6PslaqEFZku3jhmXQjPEhjuZkxjQHkgXjjj2yQBOFAFolksAhA/HBM4lgQJShKK/thMPskFoYASWV/DGeTTQCLXdeQUPbLHOlWcA0Mo0nGDAs0AOyQigUVoEyuVRt2KwRQm+UFFSClrNqwbAAmS0UnAdKedFlluwagNDPdNaBPOmW0fQMw3V2AcspJZRXAugGoIy1cBSihnFLWz9s3AB3wTdx3AHcNwABJ0I3m1EB4wm0ucCbyKIgAJZXdXQPQJWNyaZYxPdgiu1geeeJlhdS7jdUKBUuMyVyTvh4DMJwmGTPcwQrZUJZTMtdbgEq5Vm2oABYrZEeUTdLXS4ByyrqNkspJZWMzjiLsl1rGF/RJU1a5mrJ9A/aUZaU52QiaZMyIfxqoqFyI14BigtQxBagNkGHdgApQyO9Cmhj9TAGqA2QYc4AAPwfs6ZU+QNhXCBqbAtQAyHD4Vwhqhb8By2+johxR/q38y2x+KrviiSnAc4AcfwzIrrhtCvAMIMvhD3Dhfw18CMhu+M2Zor1CuyKPTAEeA2Q47A18ZDmYAhziVsYcCnkDfxgdeYKBeOQ2TQFC3cAfFkTOevkcCKqBpwEvz4DIVvAS4E1A3ktQ/GY7LSJn/f91bnc/KavlidjwUa7LRZkldSimGLf8BYloKYNdaWi1AAAAAElFTkSuQmCC" alt="" />
                            <h1 className="header-text"> SAMCLOUD </h1>

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
                            {
                                this.props.currentUserId ? 
                                    // <a href="http://localhost:3000/#/songs/new">
                                    <a href="https://samcloud-app.herokuapp.com/#/songs/new">
                                        <button className="start-upload button">Start uploading today
                                        </button>
                                    </a>
                                :
                                    <button className="start-upload button" onClick={() => this.props.openModal('Sign in')}>Start uploading today
                                    </button>
                            }
                        </div>
                    </div>
                </div>

                <div className="songs-index-container">
                    <h1 className="songs-header-text">Hear what’s trending for free in the SamCloud community</h1>
                    <SongIndexContainer />
                </div>

                <div className="explore-wrapper">
                    <button className="explore-trending button">Explore     trending playlists
                    </button>
                </div>

                <div className="splash-devices">
                    <div className="devices-img">
                    </div>
                    <div className="txt-wrapper">
                        <div className="h1-txt">
                            <h1>Never stop listening</h1>
                        </div>
                        <div className="h1-gradient">

                        </div>

                        <div className="h2-txt">
                            <h2>SamCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One... if you use the browser</h2>
                        </div>
                    </div>
                </div>

                <div className="creators">
                    <div className="creators-container">
                        <h2>
                            Calling all creators
                        </h2>
                        <p>
                            Get on SamCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?
                        </p>
                        <button>
                            Find out more
                        </button>
                    </div>
                </div>

                <div className="thank-you-wrapper">
                    <h1>
                        Thanks for listening. Now join in.

                    </h1>
                    <p>
                        Save tracks, follow artists and build playlists. All for free
                    </p>
                    <button className="big-sign-up" onClick={() => this.props.openModal('Sign up')}>
                        Create account
                    </button>

                    <div className="small-wrapper">
                        already have an account?
                        <button className="white-sign" onClick={() => this.props.openModal('Sign in')}>Sign in</button>
                    </div>
                </div>

                <div className="footer">
                    <span><a href='https://github.com/SamuelSacco' target="_blank" rel="noopener noreferrer">GitHub - </a><span></span><a href='https://www.linkedin.com/in/sam-sacco-642a59218/' target="_blank" rel="noopener noreferrer">LinkedIn - </a><span></span><a href='https://angel.co/u/samuel-sacco' target="_blank" rel="noopener noreferrer">AngelList</a></span>
                </div>
                <p className="p-footer">
                    Language: English(US)
                </p>
            </div>
            
        )
    }
}