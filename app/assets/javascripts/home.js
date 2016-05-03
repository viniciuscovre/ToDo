var item_clicked = function() {
  var item_id = $(this).attr('id');
  $('.item').removeClass('item_clicked');
  $(this).addClass('item_clicked');
};

var search_tasks = function (){
  var list_id = $(this).attr("id");

  var url = '/task';

  var settings = {
    type: 'POST',
    dataType: 'html',
    data: {list_id: list_id, is_deleted: 0}
  };

  $.ajax(url, settings).done(function(res){
    $('#active_tasks ul').html(res);
  });

  settings.data.is_deleted = 1

  $.ajax(url, settings).done(function(res){
    $('#deleted_tasks ul').html(res);
  });
}

var ready = function() {
  $('.item').click(item_clicked);

  $('.item-list').click(search_tasks);
};

$(document).ready(ready);
