var message= "";
var student;
var search;

function print(message) {
  var outputHTML =  document.getElementById("output");
  outputHTML.innerHTML = message;
}

function getInfomation(student){
  message += '<h2> Student: '+ student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
  print(message);
}

while(true) {
  search = prompt("Who do you want to search?").toLowerCase();
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if (search === student.name.toLowerCase()) {
      getInfomation(student);
    }else{
      print("Sorry, we couldn't found your name.")
    }
  }
  if (search === 'quit') {
    break;
  }
}


for (var i = 0; i < students.length; i++) {
  student = students[i];
  getInfomation(student);
  
}