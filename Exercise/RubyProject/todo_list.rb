require './task'
require './main_menu'

class TodoList
  include MainMenu
  attr_reader :tasks

  def initialize
    @tasks = []
  end

  def create_task
    task = Task.new
    task.id = task.auto_id
    task.code = task.auto_code
    print 'Name: '
    task.name = gets.chomp
    task.status = 'to_do'
    task.date = Time.now
    tasks.push(task)
  end

  def list_task(format = 'all')
    case format
    when 'all'
      result = tasks
    when 'done'
      result = tasks.select { |task| task.status == 'done' }
    when 'unfinish'
      result = tasks.select { |task| task.status == 'to_do' }
    end
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
    puts '----------------'
    puts 'Search Result'
    result.each(&:print_task)
    puts '----------------'
  end

  def done(code)
    task_done = tasks.select { |task| task.code == code }
    task_done[0].status = 'done'
    tasks.each(&:print_task)
  end
end

to_do = TodoList.new
to_do.main_menu
