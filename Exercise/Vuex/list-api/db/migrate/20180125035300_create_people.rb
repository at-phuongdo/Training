class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :name
      t.date :birthday
      t.integer :score

      t.timestamps
    end
  end
end
