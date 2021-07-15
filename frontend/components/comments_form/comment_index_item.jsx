import React, { Component } from 'react'

function CommentIndexItem(props){
    let deleteCommentsDiv = null;

    if (props.currentUser){
        deleteCommentsDiv = 
        <div className="delete-comment-wrapper">
            {
                props.currentUser.id === props.comment.user_id ?
                    <button
                        className="delete-comment"
                        onClick={() => props.deleteComment(props.comment.id)}>
                    </button>
                    :
                    null
            }
        </div>
    }

        return (
            <div className="comments-index-container">
                <div>
                        <div>
                            {props.comment.commenter}
                        </div>
                        
                        <div className="comment-body-wrapper">
                            {props.comment.body}
                        </div>
                </div>

                <div className="time-ago-delete-button">
                    <div>
                        {props.comment.created + " ago"}
                    </div>

                    {deleteCommentsDiv}
                </div>
            </div>
        )
}

export default CommentIndexItem