$(document).ready(function(){

  var images = window.kaleidoscopeImages;

  // Let's create graphemescope object inside the container
  var container = $("#scope-container");
  var scope = new Graphemescope( container[0] );


  var index = 0;
  function changePicture() {
      scope.setImage(images[index]);  
      index = (index + 1) % images.length;
  };

  setInterval(changePicture, 9000);
  changePicture();

  $(window).mousemove(function(event) {
    var factorx = event.pageX / $(window).width();
    var factory = event.pageY / $(window).height()
    
    // This will move kaleidoscope
    scope.angleTarget = factorx;
    scope.zoomTarget  = 1.0 + 0.5 * factory;
  });

  container.click(changePicture);

});
