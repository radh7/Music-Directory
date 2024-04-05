
console.log("Welcome to SaRagam");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Mehbooba- Main teri mehbooba", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chand Si Mehbooba ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Raatan Lambiyan[lofi] - Jubin Nautiyal", filePath: "songs/23.mp3", coverPath: "covers/3.jpg"},
    {songName: "Waalian[lofi] - Harnoor", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tu Aake Dekhle - King", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kaise Hua[lofi] - Vishal Mishra", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Parshawan- Harnoor", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Sufna Banke - Harvi", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Ishq Bulaava - Hasee Toh Phasee", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Dooriyan - Love Aaj Kal", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Mast Magan - 2 States", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
]

songItems.forEach((element, i)=>{ 

    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterSongName.src = songs[songIndex].coverPath;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        e.target.getElementsByClassName('songItemPlay').add('fa-pause-circle');
        e.target.getElementsByClassName('songItemPlay').remove('fa-play-circle');
    }
  
    else{
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        e.target.getElementsByClassName('songItemPlay').add('fa-play-circle');
        e.target.getElementsByClassName('songItemPlay').remove('fa-pause-circle');
        
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
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
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
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

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        
        if(audioElement.paused || audioElement.currentTime<=0)
        {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterSongName.src = songs[songIndex].coverPath;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        
    }
        else 
           if(songIndex !== parseInt(e.target.id))
        {   
                makeAllPlays();
                e.target.classList.add('fa-play-circle');
                e.target.classList.remove('fa-pause-circle');
                songIndex = parseInt(e.target.id);
                audioElement.src = `songs/${songIndex+1}.mp3`;
                audioElement.play();
                masterSongName.innerText = songs[songIndex].songName;
                masterSongName.src = songs[songIndex].coverPath;
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
            }
        else
        {
            audioElement.pause();
            gif.style.opacity = 0;
            masterSongName.innerText.hidden = true;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
        }
    })
})

const makeAllPlays2 = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    })
}
Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        
        if(audioElement.paused || audioElement.currentTime<=0)
        {
        makeAllPlays2();
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterSongName.src = songs[songIndex].coverPath;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
        
    }
        else 
           if(songIndex !== parseInt(e.target.id))
        {   
                makeAllPlays();
                songIndex = parseInt(e.target.id);
                audioElement.src = `songs/${songIndex+1}.mp3`;
                audioElement.play();
                masterSongName.innerText = songs[songIndex].songName;
                masterSongName.src = songs[songIndex].coverPath;
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
            }
        else
        {
            audioElement.pause();
            gif.style.opacity = 0;
            masterSongName.innerText.hidden = true;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }
    })
})