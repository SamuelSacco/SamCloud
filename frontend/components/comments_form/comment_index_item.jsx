import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            body: this.props.comment.body
        }
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    isEditing = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    updateBody(e){
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.updateComment({
            id: this.props.comment.id,
            body: this.state.body
        })
        this.isEditing()
    }

    render(){
        console.log(this.state)
        let deleteCommentsDiv = null;
    
        if (this.props.currentUser){
            deleteCommentsDiv = 
            <div className="delete-comment-wrapper">
                {
                    this.props.currentUser.id === this.props.comment.user_id ?
                    <div>
                        <button onClick={this.isEditing}></button>
                        <button
                        className="delete-comment"
                        onClick={() => this.props.deleteComment(this.props.comment.id)}>
                        </button>

                    </div>
                        :
                        null
                    }
            </div>
        }

            return (
                <div className="comments-index-container">
                    <div>
                            <div>
                                {this.props.comment.commenter + ":"}
                            </div>
    
                            {
                                this.state.editing ? 
                                <div>
                                    <input 
                                    type="text" 
                                    value={this.state.body} 
                                    onChange={this.updateBody}/>
                                    <button onClick={this.handleSubmit}>Save</button>
                                </div>

                                :
                            <div className="comment-body-wrapper">
                                {this.props.comment.body}
                            </div>
                            }
                    </div>
    
                    <div className="time-ago-delete-button">
                        <div>
                            {this.props.comment.created + " ago"}
                        </div>
    
                        {deleteCommentsDiv}
                    </div>
                </div>
            )
    }
}

export default CommentIndexItem