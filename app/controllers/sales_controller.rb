class SalesController < ApplicationController
	def index
	end

	def new

	end

	def create
		@sale = Sale.new(sale_params)
		if sale.save
			render json: sale
		else 
			render json: { errors: sale.errors.full_messages}
		end
	end

	def update

	end

	def destroy
		if Sale.find(params[:id]).destroy
			render json: {id: params[:id].to_i}
		else
			render json: {errors: 'Sale could not be deleted due to user error...feel bad'}
		end
	end

	private
		def sale_params
			params.require(:sale).permit(:date, :description, :price)
		end 
end
