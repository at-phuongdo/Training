# class Task
class Task
  attr_accessor :id, :code, :name, :status, :date

  @@id = 0

  def print_task
    task = id.to_s.ljust(5)\
           + code.ljust(10)\
           + name.ljust(20)\
           + status.ljust(40)\
           + date.to_s.ljust(50)
    puts task
  end

  def auto_id
    @@id += 1
  end

  def auto_code
    "T_#{id}"
  end
end
