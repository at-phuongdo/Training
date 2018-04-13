class AddFriendlyUrlToWorkspaces < ActiveRecord::Migration[5.1]
  def change
    add_column :workspaces, :friendly_url, :string
  end
end
