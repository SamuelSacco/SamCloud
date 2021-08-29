if @like
    json.extract! @like, :id, :liker_id, :song_id, :created_at
    json.created time_ago_in_words(@like.created_at)
    
    json.liker (@like.liker.username)
end
