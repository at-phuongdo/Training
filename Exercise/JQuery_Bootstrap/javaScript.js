"use strict";
// $('th').click(function(){
//   var table = $(this).parents('table').eq(0)
//   var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
//   this.asc = !this.asc
//   if (!this.asc){
//     rows = rows.reverse()
//   }
//   for (var i = 0; i < rows.length; i++){
//     table.append(rows[i])
//   }
// })

// function comparer(index) {
//   return function(a, b) {
//     var valA = getCellValue(a, index), valB = getCellValue(b, index)
//     return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
//   }
// }
// function getCellValue(row, index){ return $(row).children('td').eq(index).text() }

function sortTable(index, dir){
  var rows = $('#mytable tbody  tr').get();
  rows.sort(function(a, b) {
    var content_A = $(a).children('td').eq(index).text();
    var content_B = $(b).children('td').eq(index).text()

    if(index===1){
      var A = content_A.toUpperCase();
      var B = content_B.toUpperCase();
    }else if(index===2){
      var A = new Date(content_A);
      var B = new Date(content_B);
    }else {
      var A = + content_A
      var B = + content_B;
    }

    if (dir==='asc') {
      return (A < B) ? -1 : (A > B) ? 1 : 0;

    }else {
      return (A < B) ? 1 : (A > B) ? -1 : 0;
    }
  });
  $.each(rows, function(index, row) {
    $('#mytable').children('tbody').append(row);
  });
}


$('.button-up').click(function(){
  $('.button, .content').removeClass('red-color');
  let index = $(this).parent('th').index();
  sortTable(index, 'asc');
  $(this).addClass('red-color');
  $(this).siblings('.content').addClass('red-color');
})
$('.button-down').click(function(){
  $('.button, .content').removeClass('red-color');
  let index = $(this).parent('th').index();
  sortTable(index, 'desc');
  $(this).addClass('red-color');
  $(this).siblings('.content').addClass('red-color');
})