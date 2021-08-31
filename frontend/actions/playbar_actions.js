export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';

export const playSong = song => ({
    type: PLAY_SONG,
    song: song
});

export const pauseSong = (song) => ({
    type: PAUSE_SONG,
    song: song
});