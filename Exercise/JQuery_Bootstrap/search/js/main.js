"use strict";

var clickTime = -1;
var col1, col2, dir1, dir2;
var col_clicked;

function sortTable(col1, dir1, col2, dir2) {
  var rows = $('#mytable tbody  tr').get();
  rows.sort(function(a, b) {
    var content_col1 = $(a).children('td').eq(col1).text();
    var content_col2 = $(b).children('td').eq(col1).text();

    if(col2 && dir2 && (content_col1 === content_col2)) {
      var content_col1 = $(a).children('td').eq(col2).text();
      var content_col2 = $(b).children('td').eq(col2).text();
      return compareToSort(convertData(content_col1), convertData(content_col2), dir2);
      
    } else {
      return compareToSort(convertData(content_col1), convertData(content_col2), dir1);
    }
  });
  $.each(rows, function(index, row) {
    $('#mytable').children('tbody').append(row);
  });
}

function validateDate(dtValue)
{
  var dtRegex = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
  return dtRegex.test(dtValue);
}

function convertData(dataInput) {
  if ($.isNumeric(dataInput)) {
    return +dataInput;
  } 
  else if(validateDate(dataInput)) {
    let date = new Date(dataInput);
    return date;
  }
  else {
    return dataInput.toUpperCase();
  }
}

function compareToSort(value1, value2, dir) {
  if ((dir === 'asc' && value1 < value2) || (dir === 'desc' && value1 > value2)) {
    return -1;
  }
  else if ((dir === 'asc' && value1 > value2) || (dir === 'desc' && value1 < value2)){
    return 1;
  }
  else {
    return 0;
  }
}

function changeStyle(button) {
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

function clickTimes(col) {
  //Neu click vao cot da click truoc do thi cho clickTime=1
  //Neu click va cot khac thi cho clickTime doi dau
  if (col === col_clicked) {
    clickTime = 1;
  }else{
    clickTime = - clickTime;
  }
  //gan cot vua click vao col-clicked de lan clich sau so sanh, click vao cot da click hay chua
  col_clicked = col;
}

function clickButton(button, dir){
  let index = $(button).parent('th').index();
  clickTimes(index);
  changeStyle($(button));
  //clickTime=1 tuc la click lan 1(hoac click vao cot da click truoc do)
  //nen sort theo 1 cot
  if (clickTime === 1) {
    col1 = index;
    dir1 = dir;
    sortTable(col1, dir);
  } else {
    col2 = index;
    dir2 = dir;
    sortTable(col1, dir1, col2, dir2);
  }
}

$('.button-up').click(function() {
  clickButton($(this),'asc');
})

$('.button-down').click(function() {
  clickButton($(this),'desc');
})

$('#btn-add').click(function() {
  if ($('#name').val().length != 0 && $('#birthday').val().length != 0 && $('#score').val().length != 0) {
    var newId = increaseID();
    var newRow = '<tr><td>' + newId + '</td><td>' + $('#name').val() + '</td><td>' + $('#birthday').val() + '</td><td>' + $('#score').val() + '</td></tr>';
    $('#mytable').children('tbody').append(newRow);
  }
})

function increaseID() {
  var idCols = $('#mytable tbody tr td:nth-child(1)').get();
  var idValues = idCols.map(x => +x.textContent);
  return Math.max(...idValues)+1;
}
