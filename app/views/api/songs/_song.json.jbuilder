json.extract! song, :id, :title, :artist_id
# json.set! :audio_url, url_for(song.audio)
# json.set! :photo_url, url_for(song.photo)

if song.audio.attached? 
    json.set! :audio_url, url_for(song.audio)
end

if song.photo.attached?
    json.set! :photo_url, url_for(song.photo)
else 
    # json.imageUrl url_for(song.uploader.avatar)
end