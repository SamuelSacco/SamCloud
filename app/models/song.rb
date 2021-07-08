class Song < ApplicationRecord

    belongs_to :user,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User
    
    has_many :likes, 
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Like
    
    has_many :likers,
    through: :likes,
    source: :liker
    
    has_many :comments,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Comment
    
end