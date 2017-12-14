var buttons = document.getElementsByClassName('tab-links');
var contents = document.getElementsByClassName('tab-content');

function showContent(id) {
  var len = contents.length;
  for (var i = 0; i < len; i++) {
    contents[i].style.display = 'none';
  }
  var content = document.getElementById(id);
  content.style.display = 'block';
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var id = "show-" + this.textContent.toLowerCase();
    var len = buttons.length;
    for (var i = 0; i < len; i++) {
      buttons[i].classList.remove("active");
    }
    this.className += " active";
    showContent(id);
  });
}

showContent('show-html');
