10.times do
Video.create(
  title: Faker::Hacker.adjective,
  duration: 13.52,
  genre: "Comedy",
  description: Faker::Hacker.say_something_smart,
  trailer: "https://youtu.be/XGrYq7OWgdM",
  user_id: 1
)
end