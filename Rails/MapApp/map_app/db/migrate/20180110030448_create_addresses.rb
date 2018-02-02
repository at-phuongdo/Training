class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
