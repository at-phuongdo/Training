require 'yaml'
# File.open("example.yml", "w") do |file|
#   print "Enter your name: "
#   name = gets.chomp
#   file.puts "Name: #{name}"
#   print "Enter your email: "
#   email = gets.chomp
#   file.puts "Email: #{email}"
# end

# my_hash = { name: "Phuong", email: "abc@gmail.com" }
# puts YAML.dump(my_hash)

##load method
people = YAML.load_file("example.yml")
puts people
###=>{"Name"=>"Do Phuong", "Email"=>"abc@gmail.com"}
yaml_output = people.to_yaml
puts yaml_output
### ---
### Name: Do Phuong
### Email: abc@gmail.com
puts YAML.load(yaml_output)
