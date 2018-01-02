require './task'
require './main_menu'

# class TodoList
class TodoList
  include MainMenu
  attr_reader :tasks

  def initialize
    @tasks = []
    @index = 0
  end

  def create_task
    @index += 1
    print 'Name: '
    name = gets.chomp
    task = Task.new(@index, "T_#{@index}", name)
    tasks.push(task)
  end

  def list_task(format = 'all')
    result = tasks
    result = tasks.select { |task| task.status == format } if format != 'all'
    result.each(&:print_task)
  end

  def sort_by_name
    result = tasks.sort_by(&:name)
    result.each(&:print_task)
  end

  def sort_by_date
    result = tasks.sort_by(&:date)
    result.each(&:print_task)
  end

  def search_by_name(search)
    search = search.downcase
    result = tasks.select { |task| task.name.downcase.include?(search) }
    puts '----------------\nSearch Result'
    result.each(&:print_task)
  end

  def done(code)
    task_done = tasks.select { |task| task.code == code }
    task_done[0].status = 'done'
    tasks.each(&:print_task)
  end
end

to_do = TodoList.new
to_do.main_menu
