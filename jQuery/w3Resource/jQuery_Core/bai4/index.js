// $("#dropdownid").on("change",function() {
//     console.log($(this).find("option:selected").text());
// });
$( "div" ).click(function() {
  var color = $( this ).css( "background-color" );
  $( "p" ).html( "That div is " + color + "." );
});