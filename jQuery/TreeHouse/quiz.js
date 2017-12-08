// $('li').on('click', function(){
//   $(this).text("Clicked!");
// });
$('button').on('click', function(){
  $(this).parent().remove();
})