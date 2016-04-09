class DashboardController < ApplicationController
  def index
  	@sales = Sale.all.order('created_at DESC')
  	@tasks = Task.all.order('created_at DESC')
  	@inventories = Inventory.all.order('created_at DESC')
  end
end
