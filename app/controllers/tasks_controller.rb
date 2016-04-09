class TasksController < ApplicationController
	def index
	end

	def new

	end

	def create
		task = Task.new(task_params)
		if task.save
			render json: task
		else 
			render json: { errors: task.errors.full_messages}
		end
	end

	def update

	end

	def destroy
		if task.find(params[:id]).destroy
			render json: {id: params[:id].to_i}
		else
			render json: {errors: 'Task could not be deleted due to user error...feel bad'}
		end
	end

	private
		def task_params
			params.require(:task).permit(:date, :description, :price)
		end 
end
