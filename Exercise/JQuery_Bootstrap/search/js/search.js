"use strict";

var rows = $('#mytable tbody  tr').get();

function searchByName(input) {
  var inputSearch = input.toUpperCase();
  var len = rows.length;
  for (var i = 0; i < len; i++) {
    var name = $(rows[i]).children('td').eq(1).text().toUpperCase();
    if (name.indexOf(inputSearch) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

$('#search-content').keyup(function() {
  var input = $('#search-content').val().trim();
  searchByName(input);
});
