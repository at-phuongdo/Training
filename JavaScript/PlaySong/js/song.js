//Constructor

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.playSong = function(){
  this.isPlaying = true;
};

Song.prototype.stopSong = function(){
  this.isPlaying = false;
};

Song.prototype.toHTML = function(){
  var songHTML = '<li';
  if (this.isPlaying === true) {
    songHTML += ' class="current"';
  }
  songHTML += '>';
  songHTML += this.title;
  songHTML += '-';
  songHTML += this.artist;
  songHTML += '<span>';
  songHTML += this.duration;
  songHTML += '</span';
  songHTML += '</li>';
  return songHTML;
};