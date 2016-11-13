class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :comment, null: false
      t.integer :card_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :comments, :card_id
  end
end
