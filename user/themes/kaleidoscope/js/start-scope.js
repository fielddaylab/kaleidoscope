$(document).ready(function(){

  var images = window.kaleidoscopeImages;

  $('.hero-outer').each(function(i, outer){
    outer = $(outer);
    // Let's create graphemescope object inside the container
    var container = outer.find('.hero-container');
    if (container.length === 0) return;
    var scope = new Graphemescope( container[0] );

    var index = 0;
    function changePicture() {
      scope.setImage(images[index]);
      outer.find('.hero-option').each(function(j, option){
        j == index ? $(option).addClass('active') : $(option).removeClass('active');
      });
      outer.find('.hero-explain-content').each(function(j, explain){
        j == index ? $(explain).show() : $(explain).hide();
      });
      index = (index + 1) % images.length;
    };

    var intervalID = setInterval(changePicture, 9000);
    changePicture();

    outer.find('.hero-option').each(function(j, option){
      $(option).click(function(){
        index = j;
        changePicture();
        clearInterval(intervalID);
      });
    });

    $(window).mousemove(function(event) {
      var factorx = event.pageX / $(window).width();
      var factory = event.pageY / $(window).height()

      // This will move kaleidoscope
      scope.angleTarget = factorx;
      scope.zoomTarget  = 1.0 + 0.5 * factory;
    });

    container.click(function(){
      changePicture();
      clearInterval(intervalID);
      outer.find('.hero-controls').removeClass('hero-explain-open');
    });

    outer.find('.hero-controls-toggle').click(function(){
      outer.find('.hero-controls').toggleClass('hero-explain-open');
    });
  });
});
