class RemoveUrlFromPeople < ActiveRecord::Migration[5.1]
  def change
    remove_column :people, :url, :string
  end
end
