import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
        }
    }

    componentDidMount(){
        if (this.props.currentUser){
            this.props.fetchLike({ song_id: this.props.currentSong.id, liker_id: this.props.currentUser.id }).then(like => { 
                // JO SAYS PUT THE IF STATEMENT INSIDE THE .THEN YOU IDIOT
                if (Object.keys(like).length){
                    this.setState({
                        liked: true
                    })
                }
            })
        }
    }

    componentDidUpdate(previousProps){
        if (previousProps.currentUser && !this.props.currentUser){
            this.setState({
                liked: false
            })  
        } else if (previousProps.currentSong.id !== this.props.currentSong.id || previousProps.currentUser !== this.props.currentUser){
            this.props.fetchLike({ song_id: this.props.currentSong.id, liker_id: this.props.currentUser.id }).then(like => {                
                this.setState({
                    liked: Boolean(Object.keys(like).length)
                })
            })
        }
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
        if (!this.props.currentUser){
            return this.props.openModal("Sign up")
        }

        if (this.state.liked) {
            return this.unlike()
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