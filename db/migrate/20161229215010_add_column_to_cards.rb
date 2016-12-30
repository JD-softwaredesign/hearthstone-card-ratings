class AddColumnToCards < ActiveRecord::Migration
  def change
    add_column :cards, :standard, :float
    add_column :cards, :arena, :float
  end
end
