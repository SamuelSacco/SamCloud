export const fetchSongs = () => {
    return $.ajax({
        method: "GET",
        url: `/api/songs`
    })
}

export const createSong = song => (
    $.ajax({
        method: 'POST',
        url: '/api/songs',
        data: { song }
    })
);

export const deleteSong = (songId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/songs/${songId}`
    })
}