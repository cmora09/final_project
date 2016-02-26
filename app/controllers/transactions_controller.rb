class TransactionsController < ApplicationController
  def new
  	@account = Account.find(params[:account_id])
  	@transaction = Transaction.new
  end
  def create
  	@account = Account.find(params[:account_id])
  	@transaction = @account.transactions.build(transaction_params)
  	if @transaction.save
  		new_balance = @account.balance + @transaction.amount
  		@account.update(balance: new_balance)
  		flash[:notice] = "Your transaction has been processed. Thank you."
  		redirect_to customers_path
  	else
  		flash[:alert] = "An error has occured with your transactions"
  		redirect_to :back
  	end
  end

  def edit
  end

  def index
  end

  def show
  end
  
  private
  def transaction_params
  	params.require(:transaction).permit(:description, :amount, :account_id, :pending_trans)
  end
end
