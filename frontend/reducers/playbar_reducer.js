import {
    PLAY_SONG,
    PAUSE_SONG,
    LOOP_SONG,
    RESTART_SONG,
    SET_TIME,
    SET_VOLUME
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
                // console.log("TWO SONGS PLAYING")
                state.songAudioObject.pause()
            }
            let songAudioObject = state.songAudioObject
            
            if (state.currentSong === null || action.song.id !== state.currentSong.id){
                songAudioObject = new Audio(action.song.audio_url)
            }
            
            // songAudioObject.volume = .1
            songAudioObject.play()
            return Object.assign(newState, {
                playing: true,
                currentSong: action.song,
                songAudioObject: songAudioObject
            });

        case PAUSE_SONG:
            // console.log(action.song, state.currentSong)
            if (action.song !== state.currentSong) return state

            state.songAudioObject.pause()
            return Object.assign(newState, {
                playing: false,
                currentSong: state.currentSong,
                songAudioObject: state.songAudioObject
            });

        case LOOP_SONG:
            if (!state.songAudioObject || action.setLoop === state.songAudioObject.loop){
                return state
            }
            state.songAudioObject.loop = action.setLoop
            return newState
        case RESTART_SONG:
            state.songAudioObject.currentTime = 0;
            return state
        case SET_TIME:
            state.songAudioObject.currentTime = action.time;
            return state
        case SET_VOLUME:
            state.songAudioObject.volume = action.volume;
            return state
        default:
            return state;
    }
};

export default playbarReducer;