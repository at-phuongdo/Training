class CreateProvinces < ActiveRecord::Migration[5.1]
  def change
    create_table :provinces do |t|
      t.string :name
      t.multi_polygon :geom, :srid => 4326
      t.timestamps
    end
  end
end
