# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  has_many :comments, dependent: :destroy
  attr_reader :password
  before_create :set_rating_default

  def self.update_all_user_rating_length
    # update all the users rating string length
    # run this after add new card
    card_length = Card.last.id
    User.all.each do |user|
      if user.rating.size < card_length
        user.rating << '0' * (card_length - user.rating.size)
      end
      if user.arena_rating.size < card_length
        user.arena_rating << '0' * (card_length - user.arena_rating.size)
      end
    end
  end

  def set_rating_default
    card_length = Card.last.id
    self.rating = '0' * card_length
    self.arena_rating = '0' * card_length
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end
end
