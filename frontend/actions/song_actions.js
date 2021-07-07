import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = "REMOVE_SONG";

export const receiveSongs = (songs) => {
    return ({
        type: RECEIVE_SONGS,
        songs
    })
}

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

export const removeSong = (songId) => {
    return ({
        type: REMOVE_SONG,
        songId
    })
}

export const requestSongs = () => dispatch => {
    return (
        APIUtil.fetchSongs()
            .then(songs => dispatch(receiveSongs(songs)))
    )
}

export const createSong = song => dispatch => (
    APIUtil.createSong(song).then(song => (
        dispatch(receiveSong(song))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
        ))
);

export const deleteSong = (songId) => dispatch => {
    return (
        APIUtil.deleteSong(songId)
            .then(() => dispatch(removeSong(songId)))
    )
}