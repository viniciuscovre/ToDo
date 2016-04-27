var item_clicked = function() {
  var item_id = $(this).attr('id');
  $('.item').removeClass('item_clicked');
  $(this).addClass('item_clicked');
};

var ready = function() {
  $('.item').click(item_clicked);
};

$(document).ready(ready);
