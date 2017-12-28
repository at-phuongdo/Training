
require 'time'
# Instantiate now:

Time.new
Time.new(2011)
Time.new(2014, 2, 1)

time = Time.new
time.hour
time.min
time.sec
time.monday?
time.month
time.day
# Addition and subtraction is seconds:

time + 1  #is 1 second
time + (60) #for 1 minute
time + (60 * 60) #for 1 hour
# We can also see if one time is before or after another

time < Time.now
Time.now > time
# We can format using strftime

time.strftime("%m %d %Y %I:%M %p")

time.utc