## Infinite loop
loop do 
  puts "Do you want to continue?(Y/n)"
  answer = gets.chomp.downcase
end #use Ctrl + C to stop

#We can use conditional and break to stop loop
loop do
  print "Enter a number greater than 10 to exit: "
  answer = gets.chomp.to_i
  break if answer > 10
end

## While loop

answer = ""
while answer != "n"
  print "Do you want me to repeat this pointless loop again? (y/n) "
  answer = gets.chomp.downcase
end


## Until loop
# Oposite while loop, it run when th conditional false, stop when true

answer = ""
until answer == "no" do
  print "Do you want this loop to continue? (y/n) "
  answer = gets.chomp
end