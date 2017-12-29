# main_menu module
module MainMenu
  def main_menu
    loop do
      print <<-HEREDOC
      --------------------
      ||   TOTO LIST    ||
      --------------------
      c: Create new task
      l: List task
      a: Sort task
      s: Search by name
      d: Done
      e: Exit
      --------------------
      HEREDOC
      input = gets.chomp
      case input
      when 'c'
        create_task
      when 'l'
        list_menu
      when 'a'
        sort_menu
      when 's'
        puts 'What do you want to search?'
        search = gets.chomp
        search_by_name(search)
      when 'd'
        puts 'Enter the code of task done:'
        code_done = gets.chomp
        done(code_done)
      when 'e'
        exit!
      end
    end
  end

  def sort_menu
    loop do
      print <<-HEREDOC
      --------------------
      ||   SORT TASK    ||
      --------------------
      n: Sort by name
      d: Sort by date
      e: Back
      --------------------
      HEREDOC
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
      print <<-HEREDOC
      --------------------
      ||   LIST TASK    ||
      --------------------
      a: List all
      d: List all done task
      u: Unfinished
      e: Back
      --------------------
      HEREDOC
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
end
