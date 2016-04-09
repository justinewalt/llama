class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.date :date
      t.boolean :completed
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
