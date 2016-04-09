class CreateSalesmen < ActiveRecord::Migration
  def change
    create_table :salesmen do |t|
      t.string :username

      t.timestamps null: false
    end
  end
end
