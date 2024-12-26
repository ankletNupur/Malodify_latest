// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Taylor swift- Blank space", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "ED Shereen - Shape of you", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tones and I - Dance monkey", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dua Lipa - Levetating", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "AR Rahman violin music", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Animal - sari duniya ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Kabir singh - bekhayali", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mustafa mustafa - telugu", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Em sandeham ledu - telugu", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Nee kalli neeli", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

 //////////////////////////////////////////////////////////////////////////

 function playSong(audioId, songItem) {

    let currentAudio = null;

   console.log(audioId , "audioId");

   const audioElement = document.getElementById(audioId);

   // Pause the currently playing song (if any)
   if (currentAudio && currentAudio !== audioElement) {
     currentAudio.pause();
     currentAudio.parentElement.classList.remove("playing");
   }

   // Toggle play/pause for the selected song
   if (audioElement.paused) {
     audioElement.play();
     songItem.classList.add("playing"); // Add a playing class to the div
     currentAudio = audioElement;
   } else {
     audioElement.pause();
     songItem.classList.remove("playing");
     currentAudio = null;
   }
 }

 /////////////////////////////////////////////////////////////////////////////////



function playSong(audioId, songItem) {

  let currentAudio = null;

  const audioElement = document.getElementById(audioId);
  const playPauseIcon = document.getElementById(`playPause-${audioId}`);

  // Pause the currently playing song (if any)
  if (currentAudio && currentAudio !== audioElement) {
    currentAudio.pause();
    document
      .getElementById(`playPause-${currentAudio.id}`)
      .classList.replace("fa-pause-circle", "fa-play-circle");
  }

  // Toggle play/pause for the selected song
  if (audioElement.paused) {
    audioElement.play();
    playPauseIcon.classList.replace("fa-play-circle", "fa-pause-circle");
    currentAudio = audioElement;
  } else {
    audioElement.pause();
    playPauseIcon.classList.replace("fa-pause-circle", "fa-play-circle");
    currentAudio = null;
  }
}

function updateTime(audioId) {
  const audioElement = document.getElementById(audioId);
  const timestamp = document.getElementById(`time-${audioId}`);
  const currentTime = formatTime(audioElement.currentTime);
  const duration = formatTime(audioElement.duration || 0);
  timestamp.textContent = `${currentTime} / ${duration}`;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}
