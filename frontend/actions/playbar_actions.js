export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const LOOP_SONG = 'LOOP_SONG';
export const RESTART_SONG = 'RESTART_SONG';
export const SET_TIME = 'SET_TIME';
export const SET_VOLUME = 'SET_VOLUME';


export const playSong = song => ({
    type: PLAY_SONG,
    song: song
});

export const pauseSong = (song) => ({
    type: PAUSE_SONG,
    song: song
});

export const loopSong = (setLoop) => ({
    type: LOOP_SONG,
    setLoop: setLoop
})

export const restartSong = () => ({
    type: RESTART_SONG,
})

export const setTime = (time) => ({
    type: SET_TIME,
    time
})

export const setVolume = (volume) => ({
    type: SET_VOLUME,
    volume
})