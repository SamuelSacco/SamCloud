import React, { Component } from 'react'
import songsReducer from '../../reducers/songs_reducer'

export default class UserShow extends Component {
    render() {
        return (
            <div>
                <ProfileHeader/>
                <UsersSongIndex/>
            </div>
        )
    }
}
