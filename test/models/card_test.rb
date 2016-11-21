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

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
