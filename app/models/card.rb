# == Schema Information
#
# Table name: cards
#
#  id           :integer          not null, primary key
#  image_url    :string           not null
#  name         :string           not null
#  hero_class   :integer          not null
#  tribe        :string
#  mana         :integer          not null
#  attack       :integer
#  health       :integer
#  card_text    :text
#  expansion_id :integer          not null
#  released     :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Card < ActiveRecord::Base
  belongs_to :expansion
  has_many :comments, dependent: :destroy

  def card_comments
    data = []
    comments.each do |comment|
      data.push(
        id: comment.id,
        comment: comment.comment,
        username: comment.user.username
      )
    end
    data
  end
end
