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
    
    componentDidUpdate(){
    }
            
    toggle = () => {
        if (isPlaying){
            this.setState({
                isPlaying: false
            })
        } else {
            this.setState({
                isPlaying: true
            })
        }
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
                            <button onClick={this.start} className="song-show-button">
                                <div className="triangle">
                                </div>
                            </button>
                            <div className="show-text-container">
                                <h1 className="show-text">{this.props.song.title}</h1>
                            </div>
                        </div>
                            <AudioPlayer 
                            song={this.props.song}/>
                        <img  className="song-show-image" src={this.props.song.photo_url ? this.props.song.photo_url : "no_image.png"} alt="" />
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
                            <h1>hello test</h1>
                        </div>
                    </div>
                </div>
                </>
            );
        }
    }
}
export default SongShow