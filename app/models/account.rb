class Account < ActiveRecord::Base
  belongs_to :customer
  has_many :transactions
  enum account_type: {checking: 0, savings: 1, loan: 2}

  # def interest_rate
	 #  if account_type == "savings"
	 #  	self.account.balance *= 0.01
	 #  end
  # end
end

