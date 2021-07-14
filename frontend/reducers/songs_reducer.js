import {
    RECEIVE_SONGS,
    RECEIVE_SONG,
    REMOVE_SONG
} from '../actions/song_actions';

const songsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SONGS:
            return action.songs
        case RECEIVE_SONG:
            return { [action.song.id]: action.song};
        case REMOVE_SONG:
            let newState = Object.assign({}, oldState)
            delete newState[action.songId]
            return newState
        default:
            return oldState;
    }
};

export default songsReducer;