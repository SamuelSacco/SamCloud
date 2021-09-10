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
                            {/* <img className="header-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAsCAQAAAAwC3WkAAACUklEQVR4Ae2YA4wdURSGv+fattu4MWrbtu24bqOacWrbjNHYrm3bOF3vSXrzOpM7d3c22e8k31P03//ME0WdCM6QsvSlNS1pQGV+8JxnPOEKlyM3CD9SVjbJFzFzV1ZKJcKMVJBrkp6PslaqEFZku3jhmXQjPEhjuZkxjQHkgXjjj2yQBOFAFolksAhA/HBM4lgQJShKK/thMPskFoYASWV/DGeTTQCLXdeQUPbLHOlWcA0Mo0nGDAs0AOyQigUVoEyuVRt2KwRQm+UFFSClrNqwbAAmS0UnAdKedFlluwagNDPdNaBPOmW0fQMw3V2AcspJZRXAugGoIy1cBSihnFLWz9s3AB3wTdx3AHcNwABJ0I3m1EB4wm0ucCbyKIgAJZXdXQPQJWNyaZYxPdgiu1geeeJlhdS7jdUKBUuMyVyTvh4DMJwmGTPcwQrZUJZTMtdbgEq5Vm2oABYrZEeUTdLXS4ByyrqNkspJZWMzjiLsl1rGF/RJU1a5mrJ9A/aUZaU52QiaZMyIfxqoqFyI14BigtQxBagNkGHdgApQyO9Cmhj9TAGqA2QYc4AAPwfs6ZU+QNhXCBqbAtQAyHD4Vwhqhb8By2+johxR/q38y2x+KrviiSnAc4AcfwzIrrhtCvAMIMvhD3Dhfw18CMhu+M2Zor1CuyKPTAEeA2Q47A18ZDmYAhziVsYcCnkDfxgdeYKBeOQ2TQFC3cAfFkTOevkcCKqBpwEvz4DIVvAS4E1A3ktQ/GY7LSJn/f91bnc/KavlidjwUa7LRZkldSimGLf8BYloKYNdaWi1AAAAAElFTkSuQmCC" alt="" /> */}
                            <svg className="jo-logo" height="25" width="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2499.9979999999996 1386.6950000000002"><linearGradient id="a" x1="50.107%" x2="50.107%" y1="2.721%" y2="98.004%"><stop offset="0" stopColor="#f80" /><stop offset="1" stopColor="#f30" /></linearGradient><path d="M0 1137.737c0 31.024 11.247 54.481 33.737 70.382 22.491 15.898 46.533 21.52 72.126 16.868 24.041-4.653 40.91-13.185 50.607-25.593 9.693-12.408 14.542-32.962 14.542-61.657V800.372c0-24.044-8.336-44.403-25.012-61.075-16.672-16.676-37.03-25.012-61.074-25.012-23.267 0-43.237 8.336-59.912 25.012C8.339 755.969 0 776.327 0 800.372zm267.566 144.253c0 22.495 7.95 39.36 23.848 50.608 15.9 11.247 36.26 16.868 61.075 16.868 25.593 0 46.338-5.624 62.238-16.868 15.898-11.245 23.849-28.113 23.849-50.608V495.58c0-23.267-8.34-43.239-25.012-59.912-16.675-16.672-37.033-25.011-61.075-25.011-23.266 0-43.239 8.339-59.911 25.011-16.676 16.676-25.012 36.645-25.012 59.912zm266.403 37.227c0 22.492 8.143 39.36 24.43 50.607 16.286 11.245 37.226 16.869 62.822 16.869 24.816 0 45.174-5.624 61.072-16.869 15.9-11.247 23.851-28.115 23.851-50.607V601.442c0-24.041-8.339-44.595-25.012-61.657-16.675-17.061-36.644-25.59-59.911-25.59-24.044 0-44.595 8.529-61.657 25.59-17.061 17.062-25.593 37.616-25.593 61.657v717.775zm267.566 3.49c0 42.657 28.695 63.986 86.086 63.986 57.39 0 86.084-21.329 86.084-63.986V159.377c0-65.147-19.776-101.985-59.33-110.517-25.593-6.205-50.8 1.163-75.616 22.103-24.818 20.94-37.227 50.41-37.227 88.413v1163.331zm272.222 33.737V90.74c0-40.328 12.02-64.37 36.063-72.127C1161.78 6.205 1213.356 0 1264.543 0c118.657 0 229.176 27.92 331.547 83.76 102.373 55.84 185.165 132.038 248.37 228.594 63.21 96.56 99.854 203.001 109.936 319.337 47.308-20.165 97.717-30.247 151.23-30.247 108.578 0 201.452 38.39 278.618 115.17 77.168 76.782 115.754 169.072 115.754 276.875 0 108.578-38.586 201.256-115.754 278.036-77.166 76.78-169.651 115.17-277.455 115.17l-1012.097-1.163c-6.983-2.327-12.218-6.594-15.708-12.797s-5.227-11.638-5.227-16.291z" fill="url(#a)" /></svg>
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
                                    <Link to="/songs/new">
                                        <button className="start-upload button">Start uploading today
                                        </button>
                                    </Link>
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
                    <button className="explore-trending button" onClick={() => this.props.openModal('Sign up')}>Explore     trending playlists
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
                        <button onClick={() => this.props.openModal('Sign up')}>
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