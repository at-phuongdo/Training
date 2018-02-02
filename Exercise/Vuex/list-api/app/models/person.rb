class Person < ApplicationRecord
  def self.create_people_url(person)
    string_url = person.name.tr(' ', '-')
    old_person = Person.where('url LIKE ?', "#{string_url}%")
    if old_person
      end_url = old_person.last.url.split('-').last.to_i
      if end_url != 0
        string_url = old_person.last.url.tr("#{end_url}", "#{end_url + 1}")
        binding.pry
      else
        string_url = "#{string_url}-1"
      end
    end
    person.update(url: string_url)
  end
end
