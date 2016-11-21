class ChangeDataTypeForHeroClass < ActiveRecord::Migration
  def change
    change_column :cards, :hero_class, 'integer USING CAST(hero_class AS integer)'
  end
end
