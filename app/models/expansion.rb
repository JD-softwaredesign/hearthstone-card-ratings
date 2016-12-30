# == Schema Information
#
# Table name: expansions
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string
#

class Expansion < ActiveRecord::Base
  has_many :cards

  def release_expansion
    # set start card id and ending card id
    # since cards querying doesn't happen in order
    s = 1
    e = 0
    cards.each do |card|
      s = [s, card.id].min
      e = [e, card.id].max
      card.released = true
      card.save
    end
    User.build_statistic(s, e)
  end
end
