class CreateExpansions < ActiveRecord::Migration
  def change
    create_table :expansions do |t|
      t.string :title, null: false
      t.timestamps null: false
    end
  end
end
