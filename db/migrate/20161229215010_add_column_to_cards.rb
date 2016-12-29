class AddColumnToCards < ActiveRecord::Migration
  def change
    add_column :cards, :standard, :decimal
    add_column :cards, :arena, :decimal
  end
end
