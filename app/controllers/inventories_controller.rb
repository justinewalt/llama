class InventoriesController < ApplicationController
	def index
	end

	def new

	end

	def create
		inventory = Inventory.new(inventory_params)
		if inventory.save
			render json: inventory
		else 
			render json: { errors: inventory.errors.full_messages}
		end
	end

	def update

	end

	def destroy
		if Inventory.find(params[:id]).destroy
			render json: {id: params[:id].to_i}
		else
			render json: {errors: 'Inventory could not be deleted due to user error...feel bad'}
		end
	end

	private
		def inventory_params
			params.require(:inventory).permit(:name, :description, :price)
		end 
end