@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :user_id, :song_id, :created_at
        json.commenter (comment.user.username)
        json.created time_ago_in_words(comment.created_at)
    end
end