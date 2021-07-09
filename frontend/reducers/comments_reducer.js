import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/song_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.songs
        case RECEIVE_COMMENT:
            return { [action.song.id]: action.song };
        case REMOVE_COMMENT:
            let newState = Object.assign({}, oldState)
            delete newState[action.songId]
        default:
            return oldState;
    }
};

export default commentsReducer;