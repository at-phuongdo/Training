class AddUrlToPeople < ActiveRecord::Migration[5.1]
  def change
    add_column :people, :url, :string
  end
end
