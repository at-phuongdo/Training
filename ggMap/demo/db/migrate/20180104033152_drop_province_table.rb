class DropProvinceTable < ActiveRecord::Migration[5.1]
  def up
    drop_table :provinces
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
