# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#   
Customer.create(
	fname: "Rosemary",
	lname: "A.",
	email: "rose@mary.com",
	password: "1234",
	address: "123 Fake Street",
	city: "Bronx",
	state: "NY",
	zip: 11367
	)

Account.create(customer_id: 2, balance: 25251.08, account_type:1)
Account.create(customer_id: 2, balance: 1524.90, account_type:0)
Account.create(customer_id: 2, balance: 789.87, account_type:2)

Customer.create(
	fname: "Chris",
	lname: "M.",
	email: "chris@chris.com",
	password: "1234",
	address: "23-27 91 Street",
	city: "East Elmhurst",
	state: "NY",
	zip: 11369
	)



# Account.create()
# Transaction.create()