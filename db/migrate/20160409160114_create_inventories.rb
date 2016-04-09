class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.string :name
      t.float :price
      t.string :description
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
