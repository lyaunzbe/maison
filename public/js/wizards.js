$(function() {
  $(".h0").fitText(0.8);
  $('#play').on('click', function(){

   $.okvideo({ 
      source: 'http://www.vimeo.com/20800127',
      volume: 50,
      hd: true,
      onPlay: function(){
        $("header").fadeOut(1000);
        $("#main").fadeOut(1000);

      }
   });
   });

});
