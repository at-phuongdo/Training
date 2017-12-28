require "json"
json_string = '{"name": "Phuong", "age":"23"}'
puts json_string
###=> {"name": "Phuong", "age":"23"}
puts JSON.parse(json_string)
###=>{"name"=>"Phuong", "age"=>"23"}

my_hash = {name: "Phuong", email: "abc@gmail.com", score: [8,9,10]}
puts my_hash
###=>{:name=>"Phuong", :email=>"abc@gmail.com", :score=>[8, 9, 10]}
puts JSON.dump(my_hash)
###=>{"name":"Phuong","email":"abc@gmail.com","score":[8,9,10]}