hash = { "item" => "Bread", "quantity" => 1, "brand" => "Treehouse Bread Company" }

#return all the keys in hash
p hash.keys

#check whether or not a hash contains a key
p hash.has_key?("item")
p hash.member?("quantity")
p hash.key?("brand")

#Add item to hash
p hash.store("name" , "Phuong")
p hash

p hash.values
p hash.has_value?(1)
p hash.values_at("item", "quantity")

########################################
#######################################
p hash.length

#Dao key => value thanh value => key
p hash.invert

p hash.shift

p hash.merge({"name" => "Phuong"})

p hash.inspect