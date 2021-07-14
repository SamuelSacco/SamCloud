import React, { Component } from 'react'

function CommentIndexItem(props){
    
        return (
            <div className="comments-index-container">
                {console.log(props.comment)}
                <div>
                    <div>
                        {props.comment.name}
                    </div>
                        {props.comment.body}
                    <div>
                    </div>
                </div>

                <div className="time-ago-delete-button">
                    <div>
                        {props.comment.created + " ago"}
                    </div>
                    <div className="delete-comment-wrapper">
                        {
                            props.currentUser.id === props.comment.user_id ?
                                <button 
                                className="delete-comment" 
                                onClick={() => props.deleteComment(props.comment.id)}>
                                </button>
                            :
                                // console.log(props.currentUser, props.comment)
                                null
                        }
                    </div>
                </div>

            </div>
        )
}

export default CommentIndexItem