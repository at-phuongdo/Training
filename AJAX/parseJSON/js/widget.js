var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState ===4) {
    var statusHTML = '<ul class="bulleted">'
    var elementHTML = JSON.parse(xhr.responseText);
    console.log(elementHTML);
    for(var i=0; i< elementHTML.length; i++){
      if(elementHTML[i].inoffice === true){
        statusHTML += '<li class="in">';
      }else{
         statusHTML += '<li class="out">';
      }
      statusHTML += elementHTML[i].name +'</li>';
    }
    statusHTML += '</ul>';
  }
  document.getElementById("employeeList").innerHTML = statusHTML;
}
xhr.open('GET','data/employees.json');
xhr.send();
