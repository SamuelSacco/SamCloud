import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faRedoAlt, faVolumeMute, faVolumeDown, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default class PlayBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loop: false,
            muted: false,
            volume: 0.5,
            mutedVolume: 0.5,
            elapsed: 0,
            duration: 0,
            remainder: false,
            hover: false
        }

        this.handleVolume = this.handleVolume.bind(this);
    }

    handleVolume(e) {
        document.getElementById("audio").volume = e.target.value;
        this.setState({ volume: e.target.value, muted: false });
    }

    handleHover(mode) {
        this.setState({ hover: mode });
    }

    render() {
        if (!this.props.playing) return null;
        let volumeBar = (
            <div className="playbar-volumebar-container" onMouseEnter={() => this.handleHover(true)}>
                <input type="range" className="playbar-volumebar"
                    onChange={this.handleVolume}
                    min="0"
                    max="1"
                    value={this.state.volume}
                    step="0.01" />
            </div>
        );
        let volumeOn = this.state.volume >= 0.5 ? <FontAwesomeIcon icon={faVolumeUp} size="lg" /> : <FontAwesomeIcon icon={faVolumeDown} size="lg" />;
        let volumeButton = (this.state.muted || this.state.volume <= 0) ? <FontAwesomeIcon icon={faVolumeMute} size="lg" /> : volumeOn;

        return (
            <div className="playbar">
                <div className="playbar-container">
                    <div className="playbar-controls">
                        <button className="button-playbar" ><FontAwesomeIcon icon={faStepBackward} /></button>
                        <button className="button-playbar" ><FontAwesomeIcon icon={faPlay} /></button>
                        <button className="button-playbar" ><FontAwesomeIcon icon={faRedoAlt} /></button>
                    </div>
                    <div className="playbar-seek">
                        <span className="accent">0:00</span>
                        <div className="playbar-seeker-container">
                            {/* <audio id="audio" autoPlay
                                src={this.props.currentTrack.audioFile}
                                loop={this.state.loop}
                                muted={this.state.muted}
                                onLoadedMetadata={this.setDuration}
                                onPlaying={this.playTrack}
                                onEnded={this.handleEnded} /> */}
                            <input type="range" className="playbar-seeker"
                                // onChange={this.handleSeek}
                                min="0"
                                // max={this.state.duration}
                                // value={this.state.elapsed}
                                step="0.01" />
                        </div>
                        <span>3:00</span>
                    </div>
                    <div className="playbar-volume" onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)}>
                        {this.state.hover && volumeBar}
                        <button className="button-playbar button-volume" onClick={this.toggleMute}>{volumeButton}</button>
                    </div>
                    <div className="playbar-current-song">
                        
                    </div>
                </div>
            </div>
        )
    }
}