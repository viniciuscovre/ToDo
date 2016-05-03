class TaskController < ApplicationController
  def index
    id = params[:list_id]
    @is_deleted = params[:is_deleted]

    @list = List.find(id)

    @rs_tasks = Task.where("list_id = ?",id)

    if @rs_tasks
      @tasks = @rs_tasks.where("is_deleted = #{@is_deleted}")
    else
      @tasks = nil
    end

    respond_to do |format|
      format.js { render :found_tasks }
    end
  end
end
