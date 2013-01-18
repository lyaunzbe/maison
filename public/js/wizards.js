$(function() {
  
  
var filterLink = true;

$(".h0").fitText(1);

var headings = [
  'Humble beginnings',
  'Bruce Wayne\'s alter ego',
  'So it goes',
  '♫ ♩ ♬ ♫ ♩ ♬ ♫'
];

$('.subh0').text(headings[Math.floor(Math.random() * headings.length) + 0]);
$('a').on('click', function(e){
  $('body').fadeOut(500);
  var href = $(this).attr('href');

  setTimeout(function() {window.location = href;}, 500);
  return false;
});

});
