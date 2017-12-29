class Task
  attr_accessor :id, :code, :name, :status, :date

  @@id = 0

  def to_s
    # puts "Task: #{id} - #{code} : #{name} , status: #{status}"
    task = "#{id}".ljust(5)
    task += "#{code}".ljust(10)
    task += "#{name}".ljust(20)
    task += "#{status}".ljust(40)
    task += "#{date}".ljust(50)
    puts task
  end

  def auto_id
    @@id += 1
  end

  def auto_code
    "T_#{id}"
  end

end
