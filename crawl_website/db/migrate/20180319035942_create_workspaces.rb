class CreateWorkspaces < ActiveRecord::Migration[5.1]
  def change
    create_table :workspaces do |t|
      t.string :name
      t.string :avatar
      t.string :address
      t.string :country
      t.string :city
      t.string :district
      t.string :street
      t.text :description
      t.integer :rating

      t.timestamps
    end
  end
end
