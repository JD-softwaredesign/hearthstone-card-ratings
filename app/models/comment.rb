class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :card
  validates :comment, :user, :card, presence: true
end
