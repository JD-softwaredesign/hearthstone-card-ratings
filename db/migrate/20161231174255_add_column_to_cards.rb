class AddColumnToCards < ActiveRecord::Migration
  def change
    add_column :cards, :average, :float, default: 0
  end
end
