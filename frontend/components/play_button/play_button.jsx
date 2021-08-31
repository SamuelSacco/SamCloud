import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

export default class PlayButton extends Component {
    constructor(props){
        super(props)
        this.audio = new Audio(this.props.currentSong.audio_url)

    }

    start = () => {
        this.audio.play()
        this.props.receiveCurrentSong(this.props.currentSong)
        this.props.playSong()
    }

    pause = () => {
        this.audio.pause()
        this.props.pauseSong()
    }

    togglePlay = () => {
        if (this.props.playing) {
            return this.pause()
        } else {
            return this.start()
        }
    }

    render() {
        return (
            <button onClick={this.togglePlay} className="play-button">
                {/* {console.log(this.props)} */}
                {
                    this.props.playing ?
                        <FontAwesomeIcon icon={faPause} />
                    :
                        <FontAwesomeIcon icon={faPlay} />
                }
            </button>
        )
    }
}
