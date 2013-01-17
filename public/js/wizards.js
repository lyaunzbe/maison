$(function() {
  
  
var filterLink = true;

$(".h0").fitText(1);

$('a').on('click', function(e){
  $('body').fadeOut(500);
  var href = $(this).attr('href');

  setTimeout(function() {window.location = href;}, 500);
  return false;
});

});
