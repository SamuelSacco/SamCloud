json.extract! song, :id, :title, :artist_id, :artist, :plays
# json.set! :audio_url, url_for(song.audio)
# json.set! :photo_url, url_for(song.photo)
json.created time_ago_in_words(song.created_at)

if song.audio.attached? 
    json.set! :audio_url, url_for(song.audio)
end

if song.photo.attached?
    json.set! :photo_url, url_for(song.photo)
else 
    # json.imageUrl url_for(song.uploader.avatar)
end