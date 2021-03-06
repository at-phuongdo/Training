$(document).ready(function() {


 $('form').submit(function (evt) {
    // highlight the button
    // not AJAX, just cool looking
   // the AJAX part
   evt.preventDefault();
   var $searchField = $('#search');
   var $submitButton = $('#submit');
   
   $searchField.prop("disable", true);
   $submitButton.attr("disable", true).val("Searching...");
   
   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
   var animal = $searchField.val();
   var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $searchField.prop("disable", false);
      $submitButton.attr("disable", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  
  }); // end click

}); // end ready