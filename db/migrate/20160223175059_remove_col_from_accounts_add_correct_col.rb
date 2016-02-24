class RemoveColFromAccountsAddCorrectCol < ActiveRecord::Migration
  def change
  	remove_column :accounts, :transfer_id, :integer
  end
end
