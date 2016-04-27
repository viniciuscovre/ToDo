class HomeController < ApplicationController
  def index
    @lists = List.all
    @first_list = @lists.first

    @tasks = Task.where("list_id = ?",@first_list.id)

    @deleted_tasks = @tasks.where("is_deleted = 1")
    @active_tasks = @tasks.where("is_deleted = 0")
  end
end
