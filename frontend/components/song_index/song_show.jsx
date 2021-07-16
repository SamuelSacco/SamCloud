import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import AudioPlayer from '../audio_player/audio_player'
import CommentsForm from '../comments_form/comments_form'
import CommentsFormContainer from '../comments_form/comments_form_container'
import CommentIndexItem from '../comments_form/comment_index_item'

class SongShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false,
            song: props.song,
        }
    }

    componentDidMount() {
        this.props.requestSong(this.props.songId)
        this.props.requestComments()
    }
    
            
    toggle = () => {
        this.setState({
            isPlaying: !this.state.isPlaying
        })
    }
            
    render() {
        if (this.props.song === undefined){
            return null
        } else {
            return (
                
                <>
                <div className="width-wrapper">
                    <script src="https://unpkg.com/wavesurfer.js"></script>
                    <div className="song-show-header">
                        <div className="button-title">
                            <button onClick={this.toggle} className="song-show-button">
                                    {
                                        this.state.isPlaying ?
                                            <div className="pause-image">
                                                Pause
                                            </div>
                                            :
                                            <div className="triangle"></div>
                                    }
                            </button>
                            <div className="show-text-container">
                                <h1 className="show-text">{this.props.song.title}</h1>
                            </div>
                        </div>
                            <AudioPlayer 
                            song={this.props.song}
                            isPlaying={this.state.isPlaying}
                            />
                            <img className="song-show-image" src={this.props.song.photo_url || "no-image.png"} alt="" />
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