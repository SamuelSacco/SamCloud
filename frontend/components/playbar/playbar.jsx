import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faRedoAlt, faVolumeMute, faVolumeDown, faVolumeUp, faUser } from "@fortawesome/free-solid-svg-icons";
import LikeButtonContainer from '../like_button/like_button_container';
import PlayButtonContainer from '../play_button/play_button_container';
import RepeatSong from '../repeat_song/repeat_song';
import RestartButton from '../restart_button/restart_button';

export default class PlayBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loop: false,
            muted: false,
            volume: 0.5,
            mutedVolume: 0.5,
            elapsed: this.props.songAudioObject ? this.props.songAudioObject.currentTime : 0,
            duration: 0,
            remainder: false,
            hover: false
        }
        
        this.handleVolume = this.handleVolume.bind(this);
        this.handleSeek = this.handleSeek.bind(this);

    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 10);
    }
    
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    timeConverter = (time) => {
        if (!time){
            return ''
        }
        let min = Math.floor(time % 3600 / 60);
        let sec = Math.floor(time % 3600 % 60);
        
        let formattedSecs = sec <= 9 ? `0${sec}` : sec;
        return `${min}:${formattedSecs}`;
    }
    
    handleSeek(e) {
        // this.props.songAudioObject.currentTime = e.target.value;
        // this.setState({ elapsed: e.target.value });
        this.props.setTime(e.target.value)
        // console.log(e.target.value)
    }
        
    componentDidUpdate(previousProps){
        // if (this.props.currentSong){
        //     if ((!previousProps.currentSong) || (previousProps.currentSong.id !== this.props.currentSong.id)){
        //             this.props.updateSong({
        //                 id: this.props.currentSong.id,
        //                 plays: this.props.currentSong.plays + 1
        //             })
        //     }
        // }
    }
            
    handleVolume(e) {
        this.props.setVolume(e.target.value)
        console.log(e.target.value)
    }
    
    handleHover(mode) {
        this.setState({ hover: mode });
    }
    
    render() {

        if (!this.props.songAudioObject) return null;
        let volumeBar = (
            <div className="playbar-volumebar-container" onMouseEnter={() => this.handleHover(true)}>
                <input type="range" className="playbar-volumebar"
                    onChange={this.handleVolume}
                    min="0"
                    max="1"
                    value={this.props.songAudioObject.volume}
                    step="0.01" 
                />
            </div>);
        
        let volumeOn = this.props.songAudioObject.volume >= 0.5 ? <FontAwesomeIcon icon={faVolumeUp} size="lg" /> : <FontAwesomeIcon icon={faVolumeDown} size="lg" />;
        let volumeButton = (this.props.songAudioObject.volume <= 0) ? <FontAwesomeIcon icon={faVolumeMute} size="lg" /> : volumeOn;
        
        return (
            <div className="playbar">
                <div className="playbar-container">
                    <div className="playbar-controls">
                        {/* <button className="button-playbar" > <FontAwesomeIcon icon={faStepBackward} /> </button> */}
                        <RestartButton restartSong={this.props.restartSong}/>
                        
                        <button className="button-playbar" > <PlayButtonContainer /> </button>
                        <RepeatSong loopSong={this.props.loopSong}/>
                    </div>
                    <div className="playbar-seek">
                        <span className="time current-time">{this.timeConverter(this.props.songAudioObject.currentTime)}</span>
                        <div className="playbar-seeker-container">
                            {/* <audio id="audio" autoPlay
                                src={this.props.currentTrack.audioFile}
                                loop={this.state.loop}
                                muted={this.state.muted}
                                onLoadedMetadata={this.setDuration}
                                onPlaying={this.playTrack}
                            onEnded={this.handleEnded} /> */}
                            <input type="range" className="playbar-seeker"
                                // style="background-color:white;"
                                onChange={this.handleSeek}
                                min="0"
                                max={this.props.songAudioObject.duration ? this.props.songAudioObject.duration : ''}
                                value={this.props.songAudioObject.currentTime}
                                step="0.01" />
                        </div>
                        <span className="time song-length">{this.timeConverter(this.props.songAudioObject.duration)}</span>
                    </div>
                    <div className="playbar-volume" onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)}>
                        {this.state.hover && volumeBar}
                        <button className="button-playbar button-volume" onClick={this.toggleMute}>{volumeButton}</button>
                    </div>
                    <div className="playbar-song-item">
                        <Link className="playbar-song-album-art" to={`/songs/${this.props.currentSong.id}`}><img src={this.props.currentSong.photo_url} /></Link>
                        <div className="playbar-song-item-container">
                            <h1 className="song-title"><Link to={`/songs/${this.props.currentSong.id}`}>{this.props.currentSong.title}</Link></h1>
                            <h1 className="song-artist"><Link to={`/songs/${this.props.currentSong.id}`}>{this.props.currentSong.artist}</Link></h1>
                        </div>
                        <div>
                            <LikeButtonContainer />
                        </div>
                    </div>
                </div>
            </div>
            // <div className="playbar">
            //     <audio src={this.props.currentSong.audio_url} controls>

            //     </audio>
            // </div>
        )
    }
}