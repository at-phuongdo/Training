#Create a class Customer type Struct with 2 attributes
Customer = Struct.new(:name, :email) do
  def name_with_email
    "#{name} <#{email}>"
  end
end

customer = Customer.new("Jason", "abc@gmail.com")
customer.each_pair do |name, value|
  puts "#{name} - #{value}"
end
puts customer.inspect