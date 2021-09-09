import React from 'react'
import { connect } from 'react-redux';
import { createComment, requestComments, deleteComment, updateComment } from '../../actions/comments_actions';
import { pauseSong, playSong } from '../../actions/playbar_actions';
import { requestSong } from '../../actions/song_actions'
import SongShow from './song_show'
const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        songId: ownProps.match.params.songId,
        song: state.entities.songs[ownProps.match.params.songId],
        comments: Object.values(state.entities.comments),
        songAudioObject: state.ui.playbar.songAudioObject,
        playing: state.ui.playbar.playing
    })
}

const mDTP = dispatch => {
    return {
        requestSong: (songId) => dispatch(requestSong(songId)),
        createComment: (comment) => dispatch(createComment(comment)),
        requestComments: () => dispatch(requestComments()),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        playSong: (song) => dispatch(playSong(song)),
        pauseSong: (song) => dispatch(pauseSong(song))

    }
}

export default connect(mSTP, mDTP)(SongShow)