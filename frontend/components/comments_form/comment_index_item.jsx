import React, { Component } from 'react'

function CommentIndexItem(props){
        return (
            <div>
                {props.comment.body}
                {props.comment.song_id}
            </div>
        )
}

export default CommentIndexItem