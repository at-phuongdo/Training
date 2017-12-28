#Instantiation
arr = Array.new
hash = Hash.new
str = String.new
str = String.new("Phuong")

## Own initialize method
class MyClass
  def initialize
    puts "This is the initialize method."
  end
  def name
    "Phuong"
  end
end

instance = MyClass.new
puts instance.name
