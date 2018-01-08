# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 5.times do |i|
#   User.create(first_name: "first_name #{i}", last_name: "last_name #{i}", activated: false)
# end

# 5.times do |i|
#   Post.create(title: "title #{i}", content: "content #{i}", user_id: rand(5))
# end

# Forum.create(id: 1, name: 'Ruby', public: true)
# Forum.create(id: 3, name: 'PHP', public: true)
# Forum.create(id: 4, name: 'iOS', public: true)
# Forum.create(id: 6, name: 'SQL', public: true)

Subscriber.create(name: 'Jay')
Subscriber.create(name: 'Pasan')
Magazine.create(title: 'Ruby Reader')
Magazine.create(title: 'iOS Inspired')