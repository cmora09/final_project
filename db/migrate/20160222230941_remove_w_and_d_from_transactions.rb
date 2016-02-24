class RemoveWAndDFromTransactions < ActiveRecord::Migration
  def change
  	remove_column :transactions, :withdrawal, :decimal
  	remove_column :transactions, :deposit, :decimal
  	add_column :transactions, :amount, :decimal
  end
end
