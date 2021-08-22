import {
    RECEIVE_CURRENT_SONG,
    PLAY_SONG,
    PAUSE_SONG
} from "../actions/playbar_actions";

const _nullSong = {
    playing: false,
    currentSong: null
};

const playbarReducer = (state = _nullSong, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_SONG:
            return Object.assign(newState, {
                currentSong: action.song
            });
        case PLAY_SONG:
            return Object.assign(newState, {
                playing: true,
                currentSong: state.currentSong
            });

        case PAUSE_SONG:
            return Object.assign(newState, {
                playing: false,
                currentSong: state.currentSong,
            });
        default:
            return state;
    }
};

export default playbarReducer;