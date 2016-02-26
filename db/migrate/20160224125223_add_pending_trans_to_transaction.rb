class AddPendingTransToTransaction < ActiveRecord::Migration
  def change
  	add_column :transactions, :pending_trans, :boolean
  end
end
