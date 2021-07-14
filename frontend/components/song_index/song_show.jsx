import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import CommentsForm from '../comments_form/comments_form'
import CommentsFormContainer from '../comments_form/comments_form_container'
import CommentIndexItem from '../comments_form/comment_index_item'

class SongShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            play: false,
            pause: true,
            song: props.song,
        }
    }

    componentDidMount() {
        this.props.requestSong(this.props.songId)
        this.props.requestComments()
        // if (this.props.song !== undefined){
        //     let wavesurfer = WaveSurfer.create({
        //         container: '#waveform',
        //         scrollParent: true
        //     });
    
        //     wavesurfer.load(this.props.song.audio_url);
        // }
    }
    
    componentDidUpdate(){
    }
            
    start = () => {
        const audio = new Audio(this.props.song.audio_url)
        audio.play()
    }
            
    render() {
        console.log(this.props)
        let comment =  {
            body: "",
            user_id: this.props.currentUser.id,
            song_id: this.props.songId
        }

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
                        <div>
                            <div id="waveform"></div>
                        </div>
                        <img  className="song-show-image" src={this.props.song.photo_url ? this.props.song.photo_url : "no_image.png"} alt="" />
                    </div>
                    <div>
                        {/* <CommentsForm comment={comment} createComment={this.props.createComment}/>
                         */}
                         <CommentsFormContainer/>
                    </div>
                    <div>
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
                </>
            );
        }
    }
}
export default SongShow