var persons = [
    {
      "id": 1,
      "name" : "Mark",
      "birthday" : "01-02-1995",
      "score" : 9
    },
    {
      "id" : 2,
      "name" : "Mark",
      "birthday" : "12-03-1990",
      "score" : 10 
    },{
      "id" : 3,
      "name" : "Ailee",
      "birthday" : "01-02-1995",
      "score" : 8
    },{
      "id" : 4,
      "name" : "Tom",
      "birthday" : "10-02-1988",
      "score" : 7.5
    },{
      "id" : 5,
      "name" : "Corey",
      "birthday" : "09-01-1994",
      "score" : 9
    }
]

$(document).ready(function(){
  var len = persons.length;
  var personHTML = "";
  for (var i = 0; i < len; i++) {
    personHTML += '<tr>';
    personHTML += '<td>' + persons[i].id + '</td>';
    personHTML += '<td>' + persons[i].name + '</td>';
    personHTML += '<td>' + persons[i].birthday + '</td>';
    personHTML += '<td>' + persons[i].score + '</td>';
    personHTML += '</tr>';
  }
  $('tbody').html(personHTML);
})

