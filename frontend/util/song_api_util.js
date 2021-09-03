export const fetchSongs = () => {
    return $.ajax({
        method: "GET",
        url: `/api/songs`
    })
};

export const fetchSong = (songId) => (
    $.ajax({
        method: 'GET',
        url: `api/songs/${songId}`
    })
);

export const createSong = (formData) => (
    $.ajax({
        method: 'POST',
        url: '/api/songs',
        data: formData,
        contentType: false,
        processData: false
    })
);

export const updateSong = song => (
    $.ajax({
        method: "PATCH",
        url: `/api/songs/${song.id}`,
        data: { song }
    })
);

export const deleteSong = (songId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/songs/${songId}`
    })
};