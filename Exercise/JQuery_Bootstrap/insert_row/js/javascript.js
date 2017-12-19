"use strict";

var clickTime = -1;
var col1, col2, dir1, dir2;
var col_clicked;

function compare(contentA, contentB, col, dir){
  if(col===1){
    var A = contentA.toUpperCase();
    var B = contentB.toUpperCase();
  }else if(col===2){
    var A = new Date(contentA);
    var B = new Date(contentB);
  }else {
    var A = + contentA
    var B = + contentB;
  }
  if (dir==='asc') {
    return (A < B) ? -1 : (A > B) ? 1 : 0;

  }else {
    return (A < B) ? 1 : (A > B) ? -1 : 0;
  }
}

function sortTable(col1, dir1, col2, dir2){
  var rows = $('#mytable tbody  tr').get();
  rows.sort(function(a, b) {
    var content_A = $(a).children('td').eq(col1).text();
    var content_B = $(b).children('td').eq(col1).text();

    if(col2 && dir2 && (content_A === content_B)) {
      var content_A = $(a).children('td').eq(col2).text();
      var content_B = $(b).children('td').eq(col2).text();
      return compare(content_A, content_B, col2, dir2);
      
    } else{
      return compare(content_A, content_B, col1, dir1);
    }
  });
  $.each(rows, function(index, row) {
    $('#mytable').children('tbody').append(row);
  });
}

function clickStyle(button) {
  if (clickTime === 1) {
    $('.button, .content').removeClass('red-color green-color');
    button.addClass('red-color');
    button.siblings('.content').addClass('red-color');
  }else{
    button.addClass('green-color');
    button.siblings('.content').addClass('green-color');
  }
  // Neu duoc click lan dau thi xoa cac class truoc do
  // Neu click lan 2 thi khong xoa, ma chi them class
  
}

function clickTimes(index){
  //Neu click vao cot da click truoc do thi cho clickTime=1
  //Neu click va cot khac thi cho clickTime doi dau
  if (index === col_clicked) {
    clickTime =1;
  }else{
    clickTime = - clickTime;
  }
  //gan cot vua click vao col-clicked de lan clich sau so sanh, click vao cot da click hay chua
  col_clicked = index;
}

$('.button-up').click(function(){
  let index = $(this).parent('th').index();
  clickTimes(index);
  clickStyle($(this));
  //clickTime=1 tuc la click lan 1(hoac click vao cot da click truoc do)
  //nen sort theo 1 cot
  if (clickTime === 1) {
    col1 = index;
    dir1 = 'asc';
    sortTable(col1, dir1);
  } else {
    col2 = index;
    dir2 = 'asc';
    sortTable(col1, dir1, col2, dir2);
  }
})

$('.button-down').click(function(){
  let index = $(this).parent('th').index();
  clickTimes(index);
  clickStyle($(this));
  if (clickTime === 1) {
    col1 = index;
    dir1 = 'desc';
    sortTable(col1, dir1);
  } else {
    col2 = index;
    dir2 = 'desc';
    sortTable(col1, dir1, col2, dir2);
  }
})


$('#btn-add').click(function(){
  if ($('#name').val().length !=0 && $('#birthday').val().length !=0 && $('#score').val().length !=0) {
    var newId = increaseID();
    var newRow = '<tr><td>' + newId + '</td><td>' + $('#name').val() + '</td><td>' + $('#birthday').val() + '</td><td>' + $('#score').val() + '</td></tr>';
    $('#mytable').children('tbody').append(newRow);
  }
})

function increaseID(){
  var idCols = $('#mytable tbody tr td:nth-child(1)').get();
  var idValues = idCols.map(x => +x.textContent);
  return Math.max(...idValues)+1;
}
