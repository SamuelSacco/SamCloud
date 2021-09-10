
# SamCloud

SamCloud is a clone of SoundCloud built with AWS for storage Ruby on Rails on the backend, and Redux ReactJS. With SamCloud, artists and musicians alike have the ability to upload songs for the internet to listen to and comment on.

<img width="1223" alt="Screen Shot 2021-07-16 at 9 22 51 AM" src="https://user-images.githubusercontent.com/76980320/125954964-7feeb42b-b2c9-4a68-8d00-8a99b8917c2f.png">

# Technologies Used

SamClouds backend is built on Ruby on Rails, PostgreSQL. The frontend was built using React, Redux, and utilizes AWS S3 for cloud storage.

# Features

## User Authentication

<img width="1440" alt="Screen Shot 2021-07-16 at 9 57 06 AM" src="https://user-images.githubusercontent.com/76980320/125959491-1dd29c56-33f6-4bc9-b728-c26e4ddf254c.png">

## Playbar

<iframe src="https://giphy.com/embed/iQ4sHovrW30sfhmZPe" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/iQ4sHovrW30sfhmZPe">via GIPHY</a></p>

Once a song has been played, it will appear on the bottom of the screen in the "playbar." The track will continue to play while visitors navigate throughout the site, and the play status, as indicated by the play button, will be kept as users move to different pages.

Users can also mute / modify the volume, resume the track, and toggle looping. Users can skip around on the current track by clicking on the seek bar.

## Audio Player

<img width="1440" alt="Screen Shot 2021-07-16 at 9 37 06 AM" src="https://user-images.githubusercontent.com/76980320/125956670-e64335ad-5da5-4c11-bfb5-018a91f3072a.png">

SamClouds utilizes wavesurfer.js an HTML 5 audio player and waveform visualizer, made with JavaScript and Web Audio. Each song has its custom "wave form" displayed. 

## Upload Song

<img width="1440" alt="Screen Shot 2021-07-16 at 9 46 23 AM" src="https://user-images.githubusercontent.com/76980320/125958090-f04ab78e-30f7-48aa-bf8e-e5a2bdac0818.png">

SamCloud allows users to choose an audio file and an optional image to upload to their unique user profile. 

## Comments
<img width="745" alt="Screen Shot 2021-07-16 at 9 52 51 AM" src="https://user-images.githubusercontent.com/76980320/125958873-f34d4f97-963f-4be7-9760-442571fa26ca.png">

Once logged in users have the ability to comment on their favorite (or least favorite) songs. SamCloud also gives that user the ability to edit or delete said comment incase they were drunk when they made it (looking at you Raph).
