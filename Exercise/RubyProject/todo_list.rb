require './task'

class TodoList
  attr_reader :tasks

  def initialize
    @tasks = []
  end

  def main_menu
    loop do 
      puts "--------------------"
      puts "||   TOTO LIST    ||"
      puts "--------------------"
      puts "c: Create new task"
      puts "l: List task"
      puts "a: Sort task"
      puts "s: Search by name"
      puts "d: Done"
      puts "e: Exit"
      puts "--------------------"
      input = gets.chomp
      case input
      when 'c'
        create_task
      when 'l'
        list_menu
      when 'a'
        sort_menu
      when 's'
        puts "What do you want to search?"
        search = gets.chomp
        search_by_name(search)
      when 'd'
        puts "Enter the code of task done:"
        code_done = gets.chomp
        done(code_done)
      when 'e'
        exit!
      end
    end
  end

  def sort_menu
    loop do 
      puts "--------------------"
      puts "||   SORT TASK    ||"
      puts "--------------------"
      puts "n: Sort by name"
      puts "d: Sort by date"
      puts "e: Back"
      puts "--------------------"
      sort = gets.chomp
      case sort
      when 'n'
        sort_by_name
      when 'd'
        sort_by_date
      when 'e'
        main_menu
      end
    end
  end

  def list_menu
    loop do
      puts "--------------------"
      puts "||   LIST TASK    ||"
      puts "--------------------"
      puts "a: List all"
      puts "d: List all done task"
      puts "u: Unfinished"
      puts "e: Back"
      puts "--------------------"
      list = gets.chomp
      case list
      when 'a'
        list_task
      when 'd'
        list_task('done')
      when 'u'
        list_task('unfinish')
      when 'e'
        main_menu
      end
    end
  end

  def create_task
    task = Task.new
    task.id = task.auto_id
    task.code = task.auto_code
    print "Name: "
    task.name = gets.chomp
    task.status = "to_do"
    task.date = Time.now
    tasks.push(task)
  end

  def list_task(format = "all")
    case format
    when 'all'
      result = tasks
    when 'done'
      result = tasks.select { |task| task.status == "done" }
    when 'unfinish'
      result = tasks.select { |task| task.status == "to_do" }
    end
    result.each { |task| task.to_s }
  end

  def sort_by_name
    result = tasks.sort { |task1, task2| task1.name <=> task2.name}
    result.each { |task| task.to_s }
  end

  def sort_by_date
    result = tasks.sort { |task1, task2| task1.date <=> task2.date}
    result.each { |task| task.to_s }
  end

  def search_by_name(search)
    result = tasks.select { |task| task.name.downcase.include?(search.downcase) }
    puts "----------------"
    puts "Search Result"
    result.each { |task| task.to_s }
    puts "----------------"
  end

  def done(code)
    task_done = tasks.select { |task| task.code == code }
    task_done[0].status = "done"
    tasks.each { |task| task.to_s }
  end

end

to_do = TodoList.new
to_do.main_menu
