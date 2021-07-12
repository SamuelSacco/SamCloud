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
User.connection.execute('ALTER SEQUENCE songs_id_seq RESTART WITH 1')


# TESTING SEEDING SONGS WITH CORRECT URLS
# bad_habits = Song.create(title: "Bad Habits", artist_id: 1, )

# const formData = new FormData();
# formData.append('song[title]', this.state.title)
# formData.append('song[artist_id]', this.state.artist_id)
# formData.append('song[audio]', this.state.audioFile)

# bad_habits.audio.attach(io: File.open("/Users/samuel_sacco/Desktop/soundcloud_songs/bad_habits/Ed\ Sheeran\ -\ Bad\ Habits\ \[Official\ Video\].mp3"), filename: "Bad_Habits.mp3")