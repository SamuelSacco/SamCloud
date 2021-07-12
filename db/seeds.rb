# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
User.create({username: "Sam", email: "SamLSacco@gmail.com", password: "123456"})

Song.delete_all
ActiveStorage::Attachment.all.each { |attachment| attachment.purge }
User.connection.execute('ALTER SEQUENCE songs_id_seq RESTART WITH 1')

bad_habits = Song.create!(title: "Bad Habits", artist_id: 1)
bad_habits_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/bad_habits/Ed+Sheeran+-+Bad+Habits+(Lyrics).mp3")
bad_habits_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/bad_habits/ed-sheeran.jpg")
bad_habits.audio.attach(io: bad_habits_audio, filename: "Bad_Habits.mp3")
bad_habits.photo.attach(io: bad_habits_thumbnail, filename: "Bad_Habits.jpg")

alive = Song.create!(title: "Alive", artist_id: 1)
alive_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/alive/Alive.mp3")
alive_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/alive/artworks-Q955XpCJZ9Mg8r1O-qHhSmw-t500x500.jpeg")
alive.audio.attach(io: alive_audio, filename: "Alive.mp3")
alive.photo.attach(io: alive_thumbnail, filename: "Alive.jpeg")

call_me_mother = Song.create!(title: "Call Me Mother", artist_id: 1)
call_me_mother_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/call_me_mother/Call+Me+Mother.mp3")
call_me_mother_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/call_me_mother/artworks-QoG6iNtsKYX7-0-t500x500.jpeg")
call_me_mother.audio.attach(io: call_me_mother_audio, filename: "Mother.mp3")
call_me_mother.photo.attach(io: call_me_mother_thumbnail, filename: "Mother.jpeg")

company = Song.create!(title: "Company", artist_id: 1)
company_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/company/Company.mp3")
company_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/company/artworks-Nc3R6hFPy0s1-0-t500x500.jpeg")
company.audio.attach(io: company_audio, filename: "Company.mp3")
company.photo.attach(io: company_thumbnail, filename: "Company.jpeg")

funky = Song.create!(title: "Funky Sensation", artist_id: 1)
funky_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/funky_sensation/Funky+Sensation+-+Disclosure+feat.+Gwen+McCrae.mp3")
funky_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/funky_sensation/artworks-YvWh5vD9jsYq-0-t500x500.jpeg")
funky.audio.attach(io: funky_audio, filename: "Funky.mp3")
funky.photo.attach(io: funky_thumbnail, filename: "Funky.jpeg")

more = Song.create!(title: "Gimme More", artist_id: 1)
more_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/gimme_more/Britney+Spears+-+Gimme+More+(Official+HD+Video).mp3")
more_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/gimme_more/artworks-TP5ii0SD7qKs-0-t500x500.jpeg")
more.audio.attach(io: more_audio, filename: "More.mp3")
more.photo.attach(io: more_thumbnail, filename: "More.jpeg")

saved_my_life = Song.create!(title: "Last Night A DJ Saved My Life", artist_id: 1)
saved_my_life_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/last_night/Last+Night+A+DJ+Saved+My+Life.mp3")
saved_my_life_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/last_night/artworks-000118246250-91edts-t500x500.jpeg")
saved_my_life.audio.attach(io: saved_my_life_audio, filename: "DJ_Saved.mp3")
saved_my_life.photo.attach(io: saved_my_life_thumbnail, filename: "DJ_Saved.jpeg")

like_a_movie = Song.create!(title: "Like A Movie", artist_id: 1)
like_a_movie_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/like_a_movie/Like+A+Movie.mp3")
like_a_movie_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/like_a_movie/artworks-JLqvLBRejVl4-0-t500x500.jpeg")
like_a_movie.audio.attach(io: like_a_movie_audio, filename: "Movie.mp3")
like_a_movie.photo.attach(io: like_a_movie_thumbnail, filename: "Movie.jpeg")

rap_star = Song.create!(title: "RAPSTAR", artist_id: 1)
rap_star_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/rap_star/Polo+G+-+RAPSTAR+(Official+Video).mp3")
rap_star_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/rap_star/artworks-iLEa1ZAlZWzG-0-t500x500.jpeg")
rap_star.audio.attach(io: rap_star_audio, filename: "RAPSTAR.mp3")
rap_star.photo.attach(io: rap_star_thumbnail, filename: "RAPSTAR.jpeg")

story = Song.create!(title: "Story", artist_id: 1)
story_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/story/Story.mp3")
story_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/story/artworks-2Z61JrmY84H4-0-t500x500.jpeg")
story.audio.attach(io: story_audio, filename: "Story.mp3")
story.photo.attach(io: story_thumbnail, filename: "Story.jpeg")

bird = Song.create!(title: "The Bird", artist_id: 1)
bird_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/the_bird/The+Bird.mp3")
bird_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/the_bird/artworks-000143121703-reqbq6-t500x500.jpeg")
bird.audio.attach(io: bird_audio, filename: "Bird.mp3")
bird.photo.attach(io: bird_thumbnail, filename: "Bird.jpeg")

wants = Song.create!(title: "Wants and Needs", artist_id: 1)
wants_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/wants_and_needs/Drake+-+Wants+and+Needs+(Lyrics)+ft.+Lil+Baby.mp3")
wants_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/wants_and_needs/artworks-7igI9cWrpvt7-0-t500x500.jpeg")
wants.audio.attach(io: wants_audio, filename: "Wants.mp3")
wants.photo.attach(io: wants_thumbnail, filename: "Wants.jpeg")

# TESTING SEEDING SONGS WITH CORRECT URLS
# bad_habits = Song.create(title: "Bad Habits", artist_id: 1, )

# const formData = new FormData();
# formData.append('song[title]', this.state.title)
# formData.append('song[artist_id]', this.state.artist_id)
# formData.append('song[audio]', this.state.audioFile)
