10.times do
Video.create(
  title: "Video Title",
  duration: 13.52,
  genre: "Comedy",
  description: "This a DevPoint video",
  trailer: "https://youtu.be/XGrYq7OWgdM",
  user_id: 1
)
end
