class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :image_url, null: false
      t.string :name, null: false
      t.string :hero_class, null: false
      t.string :tribe
      t.integer :mana, null: false
      t.integer :attack
      t.integer :health
      t.text :card_text
      t.integer :expansion_id, null: false
      t.boolean :released, null: false

      t.timestamps null: false
    end
    add_index :cards, :expansion_id
  end
end
