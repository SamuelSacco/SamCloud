json.extract! song, :id, :title, :artist_id
json.set! :audio_url, url_for(song.audio)
