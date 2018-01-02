# class Task
class Task
  attr_accessor :id, :code, :name
  attr_reader :status, :date

  def initialize(id, code, name)
    @id = id
    @code = code
    @name = name
    @status = 'to_do'
    @date = Time.now
  end

  def print_task
    task = id.to_s.ljust(5)\
           +code.ljust(10)\
           + name.ljust(20)\
           + status.ljust(40)\
           + date.to_s.ljust(50)
    puts task
  end
end
