class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.references :customer, index: true, foreign_key: true
      t.decimal :balance

      t.timestamps null: false
    end
  end
end
