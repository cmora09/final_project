class AddColumnsToTransactions < ActiveRecord::Migration
  def change
  	add_column :transactions, :withdrawal, :decimal
  	add_column :transactions, :deposit, :decimal
  	remove_column :transactions, :amount , :decimal
  end
end
