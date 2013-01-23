//Zimit HTML5 Music Player
var zPlayer = document.getElementById('player');

function zMute() {
  zPlayer.muted = !zPlayer.muted;
}

function zPlay() {
  zPlayer.play();
}

function zPause() {
  zPlayer.pause();
}

function zVolumeUp() {
  zPlayer.volume+=0.1;
}

function zVolumeDown() {
  zPlayer.volume-=0.1;
}

function zTimeUpdate() {
  document.getElementById('currenttime').innerHTML = convertTime(Math.floor(zPlayer.currentTime));
  document.getElementById('totaltime').innerHTML = convertTime(Math.floor(zPlayer.duration));
  document.getElementById('time').value = Math.floor(zPlayer.currentTime);
  document.getElementById('time').max = Math.floor(zPlayer.duration);
}

function convertTime(sec) {
  var hrs = Math.floor(sec/3600);
  var min = Math.floor((sec%3600)/60);
  sec = sec % 60;
  if(sec<10) sec = "0" + sec;
  if(min<10) min = "0" + min;
  if(hrs!=0) return hrs + ":" + min + ":" + sec;
  else return min + ":" + sec;
}