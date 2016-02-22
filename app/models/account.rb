class Account < ActiveRecord::Base
  belongs_to :customer
  has_many :transactions
  enum account_type: {checking: 0, savings: 1, loan: 2}
  
  
  def self.current_balance
  	self.balance = self.balance - Transaction.amount
  end
end
