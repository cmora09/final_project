class AddTransactionIdToAccounts < ActiveRecord::Migration
  def change
  	add_column :accounts, :transfer_id, :integer
  end
end
