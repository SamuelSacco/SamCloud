import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause} from "@fortawesome/free-solid-svg-icons";

class SongIndexItem extends React.Component{
    constructor(props){
        super(props)
        // this.audio = new Audio(this.props.song.audio_url)
        this.state = {
            playing: false
        }
    }

    componentDidUpdate(previousProps, previousState){
        if (!this.props.playing && this.state.playing){
            // console.log("PREVIOUS_PROPS:",  previousProps, "PREVIOUS_STATE:", previousState, "PROPS:", this.props, "STATE:", this.state)
            // this.setState({
            //     playing: false
            // })

        } else if (this.state.playing && previousState.playing && this.props.currentSong.id !== this.props.song.id ){
            this.setState({
                playing: false
            })
            // console.log("PREVIOUS_PROPS:",  previousProps, "PREVIOUS_STATE:", previousState, "PROPS:", this.props, "STATE:", this.state)
        }
    }
    
    start = () => {
        this.setState({
            playing: true
        })
        this.props.playSong(this.props.song)
    }
    
    pause = () => {
        this.setState({
            playing: false
        })
        this.props.pauseSong(this.props.song)
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
                {/* {console.log(document.getElementsByTagName("li"))} */}
                <img className="thumbnails"  src={this.props.song.photo_url || "no-image.png"} alt="img not found" />
                <button onClick={this.togglePlay} className="thumbnail-button">
                    {
                        this.props.playing && this.props.currentSong.id === this.props.song.id ? 
                        // <div className="pause-image">
                        //         Pause
                        // </div>
                            <FontAwesomeIcon className="fas fa-pause fa-2x" icon={faPause} />

                        :
                        <div className="triangle"></div>
                    }
                </button>
                <h1><Link to={`/songs/${this.props.song.id}`} className="song-page-link">{this.props.song.title}</Link></h1>
                <h2 className="song-page-link artist">{this.props.song.artist}</h2>
                {/* <button onClick={start}>Test Play</button> */}
                {/* <button onClick={() => this.props.deleteSong(this.props.song.id)}>Delete Song</button> */}
            </li>
        )
    }
}

export default SongIndexItem;