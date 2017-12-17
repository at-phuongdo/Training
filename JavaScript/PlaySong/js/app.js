var playlist = new PlayList();

var island = new Song("Island", "Winner", "3:50");
var bangbangbang = new Song("Bang Bang Bang", "Big Bang", "4:50");

// Add cac song vao playlist, goi den ham add cua playlist
this.playlist.add(island);
this.playlist.add(bangbangbang);

//In ra list cac bai hat co trong playlist vao <ol div="playlist">
var list = document.getElementById("playlist");
this.playlist.renderHTML(list);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderHTML(list);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderHTML(list);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderHTML(list);
}
