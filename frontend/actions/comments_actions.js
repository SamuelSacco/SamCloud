import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = (comments) => {
    return ({
        type: RECEIVE_COMMENTS,
        comments
    })
}

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = (commentId) => {
    return ({
        type: REMOVE_COMMENT,
        commentId: commentId
    })
};

export const requestComments = () => dispatch => {
    return (
        APIUtil.fetchComments()
            .then(comments => dispatch(receiveComments(comments)))
    )
};

export const requestComment = (commentId) => dispatch => {
    return (
        APIUtil.fetchComment(commentId)
            .then(comment => dispatch(receiveComment(comment)))
    )
};

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment).then(comment => (
        dispatch(receiveComment(comment))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const updateComment = (comment) => dispatch => {
    return (
        APIUtil.updateComment(comment)
            .then(comment => dispatch(receiveComment(comment)))
    )
}

export const deleteComment = (commentId) => dispatch => {
    return (
        APIUtil.deleteComment(commentId)
            .then(() => dispatch(removeComment(commentId)))
    )
};