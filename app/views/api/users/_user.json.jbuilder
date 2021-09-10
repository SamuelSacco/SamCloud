json.extract! user, :id, :username

if user.avatar.attached?
    json.set! :avatar_url, url_for(user.avatar)
else 
    json.set! :avatar_url, url_for("https://samcloud-seed.s3.amazonaws.com/soundcloud_avatars/default_avatar.jpeg")
end