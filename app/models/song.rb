class Song < ApplicationRecord

    belongs_to :user,
    primary_key: :id,
    foreign_key: :arist_id,
    class_name: :User
    
end