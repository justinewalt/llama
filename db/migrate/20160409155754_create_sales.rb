class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.date :date
      t.float :price
      t.string :description

      t.timestamps null: false
    end
  end
end
