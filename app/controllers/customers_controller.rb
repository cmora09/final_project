class CustomersController < ApplicationController
  def index
  	@customer = current_cust
  	@accounts = @customer.accounts.all
  	if !current_cust
  		redirect_to login_path
  	end
  end

  def new
  	@customer = Customer.new
  end
  def create
  	@customer = Customer.new(customer_params)
  	if @customer.save
  		flash[:notice] = "Welcome to M Banking. We hope provide excellent banking services to make your life easier."
  		redirect_to login_path
  	end
  	else
  		flash[:alert] = "There was a problem creating your account."
  		redirect_to root_path
  	end
  end

  def edit
  	@customer = Customer.find(params[:id])
  end

  def update
  	@customer = Customer.find(params[:id])
  	if @customer.update(customer_params)
  		flash[:notice] = "Your account details have been saved. Thank you."
  		redirect_to root_path
  	end
  	else
  		flash[:alert] = "An error occured while updating your settings."
  		redirect_to edit_customer_path
  	end
  end

  def show
  	@customer = current_cust

  end
  
  def destroy
  	@customer = Customer.find(params[:id])
  	if @customer.destroy
  		flash[:notice] = "Your account has been deleted. We are sorry to see you go."
  		redirect_to login_path
  	end
  	else
  		flash[:alert] = "There was a problem deleting your account."
  		redirect_to root_path
  	end
  end

  private
  def customer_params
  	params.require(:customer).permit(:fname,:lname,:email,:username,:password,:address,:city,:state,:zip)
  end
end
