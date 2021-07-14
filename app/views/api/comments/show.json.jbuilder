json.extract! @comment, :id, :body, :user_id, :song_id, :created_at
json.created time_ago_in_words(@comment.created_at)

json.commenter do
  json.partial! "/api/users/user", user: @comment.user
end