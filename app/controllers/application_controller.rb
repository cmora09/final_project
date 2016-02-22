class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_cus

  def current_cus
  	@current_cust ||=User.find(session[:customer_id]) if session[:customer_id]
  end
end
