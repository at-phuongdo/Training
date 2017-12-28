#Hash with each
person = { "name" => "Phuong", "age" => 23 }

person.each do |key, value|
  puts "Hash key is #{key} and value is #{value}"
end

#Hash with each_key
person.each_key do |key|
  puts "Key: #{key}"
end

#Hash with each_value
person.each_value do |value|
  puts "Value: #{value}"
end