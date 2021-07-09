export const fetchComments = () => {
    return $.ajax({
        method: "GET",
        url: `/api/comments`
    })
};

export const fetchComment = (commentId) => (
    $.ajax({
        method: 'GET',
        url: `api/comments/${commentId}`
    })
);

export const createComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: { comment }
    })
);

export const deleteComment = (commentId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
};