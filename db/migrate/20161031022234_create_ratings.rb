class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :card_id, null: false
      t.integer :rating, null: false
      t.timestamps null: false
    end
    add_index(:ratings, [:user_id, :card_id], unique: true)
  end
end
