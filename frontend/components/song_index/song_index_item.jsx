import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.audio = new Audio(this.props.song.audio_url)
        this.state = {
            playing: false
        }
    }
    start = () => {
        this.audio.play()
        this.setState({
            playing: true
        })
        console.log(this.props)
        this.props.playSong()
        console.log(':pointleft')
    }

    pause = () => {
        this.audio.pause()
        this.setState({
            playing: false
        })
    }

    togglePlay = () => {
        if (this.state.playing){
            return this.pause()
        } else {
            return this.start()
        }
    }

    render(){
        return (
            <li>
                <img className="thumbnails"  src={this.props.song.photo_url || "no-image.png"} alt="img not found" />
                <button onClick={this.togglePlay} className="thumbnail-button">
                    {
                        this.state.playing ? 
                            <div className="pause-image">
                                Pause
                            </div>
                        :
                        <div className="triangle"></div>
                    }
                </button>
    
                <h1><Link to={`/songs/${this.props.song.id}`} className="song-page-link">{this.props.song.title}</Link></h1>
                {/* <button onClick={start}>Test Play</button> */}
                {/* <button onClick={() => this.props.deleteSong(this.props.song.id)}>Delete Song</button> */}
            </li>
        )
    }
}

export default SongIndexItem;