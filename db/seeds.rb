10.times do
  video = Video.create(
    title: Faker::Hacker.adjective,
    duration: 13.52,
    genre: "Comedy",
    description: Faker::Hacker.say_something_smart,
    trailer: "https://www.youtube.com/embed/XGrYq7OWgdM",
    user_id: 1
  )
  10.times do
    Comment.create(
      body: Faker::TvShows::Seinfeld.quote,
      video_id: video.id,
      user_id: 1
    )
  end
end
