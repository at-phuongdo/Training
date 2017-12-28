#Atribute, method, to_s method
class Name
  attr_reader :title
  attr_writer :first_name
  attr_accessor :last_name
  
  def initialize(title, first_name, last_name)
    @title = title
    @first_name = first_name
    @last_name = last_name
  end

  def full_name
    @title + " " + @first_name + " " + @last_name
  end

  def to_s
    full_name
  end
end

name = Name.new("Miss", "Do", "Phuong")
puts name
puts name.inspect
