class User < ApplicationRecord
  attr_reader :password
  after_initialize :ensure_session_token

  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :songs,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :Song

  has_many :likes,
  primary_key: :id,
  foreign_key: :liker_id,
  class_name: :Like

  has_many :liked_songs,
  through: :likes,
  source: :song

  has_many :comments,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Comment

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end
end