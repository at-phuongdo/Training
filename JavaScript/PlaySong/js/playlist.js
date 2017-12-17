//Constructor

function PlayList() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

PlayList.prototype.add = function(song){
  this.songs.push(song);
};

PlayList.prototype.play = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.playSong();
}

PlayList.prototype.next = function(){
  this.stop();
  this.nowPlayingIndex ++;
  if (this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
}

PlayList.prototype.stop = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stopSong();
}

PlayList.prototype.renderHTML = function(list) {
  list.innerHTML = "";
  for (var i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }
}
