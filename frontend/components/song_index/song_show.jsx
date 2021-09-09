import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import AudioPlayer from '../audio_player/audio_player'
import CommentsForm from '../comments_form/comments_form'
import CommentsFormContainer from '../comments_form/comments_form_container'
import CommentIndexItem from '../comments_form/comment_index_item'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

class SongShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            song: props.song,
        }
    }

    componentDidMount() {
        this.props.requestSong(this.props.songId)
        this.props.requestComments()
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
        if (this.state.playing) {
            return this.pause()
        } else {
            return this.start()
        }
    }
            
    render() {
        console.log(this.props)
        if (this.props.song === undefined){
            return null
        } else {
            return (
                
                <>
                <div className="width-wrapper">
                    <script src="https://unpkg.com/wavesurfer.js"></script>
                    <div className="song-show-header">
                        <div className="button-title">
                            <button onClick={this.togglePlay} className="song-show-button">
                                    {
                                        this.props.playing && this.props.currentSong.id === this.props.song.id ?
                                            // <div className="pause-image">
                                            //     Pause
                                            // </div>
                                            <FontAwesomeIcon className="fas fa-pause fa-2x" icon={faPause} />

                                            :
                                            <div className="triangle"></div>
                                    }
                            </button>
                            {/* <div className="column-wrap">
                                <div className="show-text-container-1">
                                    <h1 className="show-text">{this.props.song.artist}</h1>
                                </div>
                                <div className="show-text-container">
                                    <h1 className="show-text">{this.props.song.artist} - {this.props.song.title}</h1>

                                </div>

                            </div> */}
                            <div className="column-wrap">
                                <div>
                                    <h2>
                                        {this.props.song.artist}
                                    </h2>

                                </div>
                                <h1>
                                    {this.props.song.artist} - {this.props.song.title}

                                </h1>
                            </div>
                        </div>
                            <AudioPlayer 
                            song={this.props.song}
                            songAudioObject={this.props.songAudioObject}
                            isPlaying={this.state.isPlaying}
                            />
                            <div className="display-next">
                                <h1>
                                    {this.props.song.created} ago
                                </h1>
                                <img className="song-show-image" src={this.props.song.photo_url || "no-image.png"} alt="" />

                            </div>

                    </div>

                    <div className="page-content-container">
                        <div className="form-content">

                            <div className="form-container">
                                    {/* <CommentsForm comment={comment} createComment={this.props.createComment}/>
                                    */}
                                    <CommentsFormContainer/>
                            </div>
                            <div className="comment-index-item-container">
                                <ul>
                                    {
                                        // this.props.comments ? 
                                        this.props.comments.map(comment => {
                                            if (comment.song_id === parseInt(this.props.songId)){
                                            return (
                                                <CommentIndexItem
                                                    key={comment.id}
                                                    comment={comment}
                                                    deleteComment={this.props.deleteComment}
                                                    updateComment={this.props.updateComment}
                                                    currentUser={this.props.currentUser}
                                                />
                                            )
                                            } 
                                        })
                                        // :
                                        // "nah"
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="git-link">
                            <h1></h1>
                        </div>
                    </div>
                </div>
                </>
            );
        }
    }
}
export default SongShow