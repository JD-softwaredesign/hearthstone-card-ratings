# == Schema Information
#
# Table name: cards
#
#  id           :integer          not null, primary key
#  image_url    :string           not null
#  name         :string           not null
#  class        :string           not null
#  tribe        :string
#  mana         :integer          not null
#  attack       :integer          not null
#  health       :integer          not null
#  card_text    :text
#  expansion_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Card < ActiveRecord::Base
  belongs_to :expansion
  has_many :ratings, dependent: :destroy
end
