class Customer < ActiveRecord::Base
	has_many :accounts
	has_many :transactions
	has_secure_password
end
