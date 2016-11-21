# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  comment    :string           not null
#  card_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :card
  validates :comment, :user, :card, presence: true
end
