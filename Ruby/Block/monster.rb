class Monster
  attr_reader :name, :actions

  def initialize(name)
    @name = name
    @actions = {
      screams: 0,
      scare: 0
    }
  end

  def say(&block)
    print "#{name} say..."
    yield
  end

  def scream(&block)
    actions[:screams] += 1
    print "#{name} scream! "
    yield
  end

  def scare(&block)
    actions[:scare] += 1
    print "#{name} scare you!"
    yield
  end
end

monster = Monster.new("Pudding")
monster.say { puts "Welcome to my home."}
monster.scream do
  puts "Boo!"
end
monster.scare do
  puts "Go away!"
end