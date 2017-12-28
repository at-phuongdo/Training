def block_method
  puts "This is the first line"
  yield
  puts "This is the last line"
end

block_method do
  puts "This is block code line"
end


##Block argument
[1,2,3,4,5].each { |i| puts i }

def get_name
  print "Enter your name: "
  name = gets.chomp
  yield name
end

get_name do |name|
  puts "That's a cool name, #{name}!"
end

#######
def get_name
  print "Enter your name: "
  name = gets.chomp
  yield name
  name
end

my_name = get_name do |your_name|
  puts "That's a cool name, #{your_name}!"
end

puts "My name is : #{my_name}"