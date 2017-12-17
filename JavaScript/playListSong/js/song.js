//Constructor
function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlay = false;
}

Song.prototype.playSong = function() {
  this.isPlay = true;
}

Song.prototype.stopSong = function() {
  this.isPlay = false;
}

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlay) {
    htmlString += ' class="current"';
  }
  htmlString += '>'
  htmlString += this.title + '-';
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
}
