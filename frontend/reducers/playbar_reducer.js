import {
    RECEIVE_CURRENT_SONG,
    PLAY_SONG,
    PAUSE_SONG
} from "../actions/playbar_actions";

const _nullSong = {
    playing: false,
    currentSong: null,
    songAudioObject: null
};

const playbarReducer = (state = _nullSong, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        // case RECEIVE_CURRENT_SONG:
        //     return Object.assign(newState, {
        //         currentSong: action.song
        //     });
        case PLAY_SONG:
            if (state.songAudioObject !== null){
                console.log("TWO SONGS PLAYING")
                state.songAudioObject.pause()
            }

            let songAudioObject = new Audio(action.song.audio_url)
            songAudioObject.play()
            return Object.assign(newState, {
                playing: true,
                currentSong: action.song,
                songAudioObject: songAudioObject
            });

        case PAUSE_SONG:
            console.log(action.song, state.currentSong)
            if (action.song !== state.currentSong) return state

            state.songAudioObject.pause()
            return Object.assign(newState, {
                playing: false,
                currentSong: state.currentSong,
                songAudioObject: state.songAudioObject
            });
        default:
            return state;
    }
};

export default playbarReducer;