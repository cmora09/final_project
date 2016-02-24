class RemoveColumnFromAccounts < ActiveRecord::Migration
  def change
  	remove_column :accounts, :transaction_id, :integer
  end
end
