$(function(){
  $(window).scroll(function(){
    $('.follow-scroll').each(function(i, element){
      element = $(element);
      if ($(window).scrollTop() > element.parent().offset().top) {
        element.addClass('scroll-locked');
      } else {
        element.removeClass('scroll-locked');
      }
    });
  });
});
