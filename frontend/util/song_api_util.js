export const createSong = song => (
    $.ajax({
        method: 'POST',
        url: '/api/songs',
        data: { song }
    })
);