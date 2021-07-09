import React from 'react'
import { connect } from 'react-redux'
import { createSong } from '../../actions/song_actions'
import SongForm from './song_form'

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        song: {
            title: "",
            artist_id: state.session.id,
            audioFile: null
        }
    })
}

const mDTP = (dispatch) => {
    return ({
        createSong: formData => (dispatch(createSong(formData)))
    })
}

export default connect(mSTP, mDTP)(SongForm)