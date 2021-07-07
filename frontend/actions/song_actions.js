import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

export const createSong = song => dispatch => (
    APIUtil.createSong(song).then(song => (
        dispatch(receiveSong(song))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);