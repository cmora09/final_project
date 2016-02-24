class Account < ActiveRecord::Base
  belongs_to :customer
  has_many :transactions
  enum account_type: {checking: 0, savings: 1, loan: 2}

  def self.current_balance
  	
  end

  def update_balance
  	#pass in the transactions that occur in transaction controller which would be in the update create
  end
end

# im updating the account balance with every transaction that is passed