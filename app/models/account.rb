class Account < ActiveRecord::Base
  belongs_to :customer
  enum account_type: {checking: 0, savings: 1, loan: 3}
end
