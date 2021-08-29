@likes.each do |like|
    json.set! like.id do 
        json.extract! like, :id, :liker_id, :song_id, :created_at
        json.liker (like.liker.username)
        json.created time_ago_in_words(like.created_at)
    end
end