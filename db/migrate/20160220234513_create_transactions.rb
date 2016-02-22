class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.references :customer, index: true, foreign_key: true
      t.references :account, index: true, foreign_key: true
      t.decimal :amount

      t.timestamps null: false
    end
  end
end
