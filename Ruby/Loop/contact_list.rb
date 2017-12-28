def ask(question, kind="string")
  print question + " "
  answer = gets.chomp
  answer = answer.to_i if kind == "number"
  return answer
end

def add_contact
  contact = {"name" => " ", "phone_number" => []}
  contact["name"] = ask("What'sthe person's name?")
  answer = ""
  while answer != "n"
    answer = ask("Do you want to add a phone number? (Y/n)")
    if answer == "y"
      phone = ask("Enter your phone number")
      contact["phone_number"].push(phone)
    end
  end
  return contact
end

contact_list = []

answer = ""
while answer != "n"
  contact_list.push(add_contact())
  answer = ask("Add another? (Y/n)")
end

answer = ask("What's your name?")
puts answer