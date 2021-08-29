import React, { Component } from 'react'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false
        }
    }

    componentDidMount(){
        this.props.fetchLike({ song_id: this.props.currentSong.id, liker_id: this.props.currentUser.id }).then(like => { 
            // JO SAYS PUT THE IF STATEMENT INSIDE THE .THEN YOU IDIOT
            if (Object.keys(like).length > 0){
                this.setState({
                    liked: true
                })
            }
        })
    }

    like = () => {
        this.setState({
            liked: true
        })
        this.props.createLike({song_id: this.props.currentSong.id, liker_id: this.props.currentUser.id})
    }

    unlike = () => {
        this.setState({
            liked: false
        })
        this.props.deleteLike({song_id: this.props.currentSong.id, liker_id: this.props.currentUser.id})
    }

    toggleLike = () => {
        // console.log(this.state.like)
        if (this.state.liked) {
            return this.unlike()
            // console.log(this.state)
        } else {
            return this.like()
        }
    }

    render() {
        return (
            <button onClick={this.toggleLike}>
                {
                    this.state.liked ? 
                    <div>
                        <FontAwesomeIcon className="liked" icon ={faHeart} />
                    </div>
                    :
                    <div>
                        <FontAwesomeIcon className="unliked" icon={faHeart} />
                    </div>
                }
            </button>
        )
    }
}