$(function(){
  var opened_index = null;
  function open_item(grid, i) {
    grid = $(grid);
    var rows = grid.find('.content-details');
    var items = grid.find('.content-details-item');
    if (i < 0 || items.length <= i) return;
    rows.hide();
    items.hide();
    var item = $(items[i]);
    var row = item.parents('.content-details');
    row.show();
    item.show();
    $('html,body').animate({
      scrollTop: row.offset().top - 150
    }, 500);
    opened_index = i;
  }
  $('.content-entry').click(function(e){
    var entry = $(e.delegateTarget);
    var grid = entry.parents('.content-grid');
    open_item(grid, grid.find('.content-entry').index(entry));
  });
  $('.content-details-controls-x').click(function(e){
    $(e.delegateTarget).parents('.content-details').hide();
  });
  $('.content-details-controls-prev').click(function(e){
    var grid = $(e.delegateTarget).parents('.content-grid');
    open_item(grid, opened_index - 1);
  });
  $('.content-details-controls-next').click(function(e){
    var grid = $(e.delegateTarget).parents('.content-grid');
    open_item(grid, opened_index + 1);
  });
});
