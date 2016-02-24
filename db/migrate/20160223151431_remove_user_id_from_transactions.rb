class RemoveUserIdFromTransactions < ActiveRecord::Migration
  def change
  	remove_column :transactions, :customer_id, :integer
  end
end
