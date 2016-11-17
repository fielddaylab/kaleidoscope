$(function(){
  $('.content-entry').click(function(e){
    var entry = $(e.delegateTarget);
    var i = entry.index();
    entry.parents('.content-grid').children('.content-details').hide();
    var details = entry.parents('.content-row').next();
    details.show();
    var items = details.children('.content-details-item');
    items.each(function(j, item){
      i === j ? $(item).show() : $(item).hide();
    });
  });
});
