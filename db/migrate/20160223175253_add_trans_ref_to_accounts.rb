class AddTransRefToAccounts < ActiveRecord::Migration
  def change
    add_reference :accounts, :transaction, index: true, foreign_key: true
  end
end
