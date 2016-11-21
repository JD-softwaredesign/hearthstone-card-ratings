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
end
