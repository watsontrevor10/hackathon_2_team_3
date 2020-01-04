10.times do
Video.create(
  title: Faker::Hacker.adjective,
  duration: Faker::Number.decimal(l_digits: 2),
  genre: Faker::Game.genre,
  description: Faker::Hacker.say_something_smart,
  trailer: "https://youtu.be/XGrYq7OWgdM",
  user_id: 1
)
end
puts "added 10 videos"