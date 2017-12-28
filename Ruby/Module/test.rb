class Team
  include Enumerable

  def initialize(*members)
    @members = members
  end

  def each(&block)
    @members.each do |member|
      block.call(member)
    end
    # or
    # @members.each(&block)
  end
end

team = Team.new("Face", "B.A. Barracus", "Murdoch", "Hannibal")
#use any Enumerable method from here on
# p team.map(&:downcase)
p team.map { |member| member.downcase }