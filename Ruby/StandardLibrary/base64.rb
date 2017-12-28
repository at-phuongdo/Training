require 'base64'

message = "Hello Phuong"
encoded = Base64.encode64(message)
puts encoded #"SGVsbG8gUGh1b25n\n"

puts Base64.urlsafe_encode64(message) #"SGVsbG8gUGh1b25n"
