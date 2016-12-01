$(function(){
  $('.youtube-link').each(function(i, link){
    link = $(link);
    link.html('(video)');
    link.click(function(){
      $('.ytplayer').attr('src', link.attr('data-url'));
    });
  });
});
