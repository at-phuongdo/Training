class Name
  def initialize(title)
    @title = title
  end

  def title
    @title
  end

  def first_name
    "Do"
  end

  def last_name
    "Phuong"
  end
end

name = Name.new("Miss")
puts name.title + " " + name.first_name  + " " + name.last_name