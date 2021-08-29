export const fetchLikes = () => {
    return $.ajax({
        method: "GET",
        url: `/api/likes`
    })
};

export const fetchLike = (like) => (
    $.ajax({
        method: 'GET',
        url: `api/likes/${like}`,
        data: { like }

    })
);

export const createLike = (like) => (
    $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    })
);

export const deleteLike = (like) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/likes/${like}`,
        data: { like }
    })
};