require 'date'
#Instantiate a new date object:

Date.new
Date.new(2015, 3, 1)
#Parsing dates from strings:

puts Date.parse("March 1st, 2015")
# Date.parse("It's 2015, everyone!")
# We can also pass in our own format string to the strptime method:

puts Date.strptime("It's 2015, everyone!", "It's %Y, everyone!")
# Dates can be manipulated with mathematical operators:

Date.today
Date.today + 1
Date.today - 1
Date.today << 1 #(subtract month)
Date.today >> 1 #(add month)
# Format strings can be passed as well:

puts Date.today.strftime("%Y %m, %d")
puts Date.today.strftime("%m %d, %Y")