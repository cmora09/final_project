class AddAccountTypeColumnToAccount < ActiveRecord::Migration
  def change
  	add_column :accounts, :account_type, :integer
  end
end
