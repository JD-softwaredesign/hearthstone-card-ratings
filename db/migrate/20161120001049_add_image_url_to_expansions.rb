class AddImageUrlToExpansions < ActiveRecord::Migration
  def change
    add_column :expansions, :image_url, :string
  end
end
