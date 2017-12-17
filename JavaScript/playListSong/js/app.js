var playlist = new PlayList();

var BangBangBang = new Song("BangBangBang", "BigBang", "2:30");
var Island = new Song("Island", "Winner", "3:30");

playlist.add(BangBangBang);
playlist.add(Island);

var playlistElement = document.getElementById("playlist");

playlist.renderIn(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderIn(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderIn(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderIn(playlistElement);
}
