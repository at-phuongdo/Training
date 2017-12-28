def get_name(prompt, &block)
  print prompt
  name = gets.chomp
  block.call(name)
  name
end

my_name = get_name do |your_name|
  puts "That's a cool name, #{your_name}!"
end

puts "my_name: #{my_name}" 

##use block_given?
def get_name(prompt, &block)
  print prompt
  name = gets.chomp
  block.call(name) if block_given?
  name
end

my_name = get_name("Name: ") do |your_name|
  puts "That's a cool name, #{your_name}!"
end

puts "my_name: #{my_name}"

##block_given? tra ve true neu co block 
##(co thuc hien 1 viec gi do trong block)

#block as argumaent
class SimpleBenchmarker
  def run(description, &block)
    start_time = Time.now
    block.call
    end_time = Time.now
    elapsed = end_time - start_time

    puts "\n#{description} results"
    puts "Elapsed time: #{elapsed} seconds"
  end
end

bench_marker = SimpleBenchmarker.new
bench_marker.run "description" do 
  5.times do | item|
    puts "Hello"
  end
end
