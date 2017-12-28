def palindrome?(sentence)
  # Write your code here
  sentence.downcase.delete(" ") == sentence.downcase.delete(" ").reverse
end

puts palindrome?('Race fast safe car')