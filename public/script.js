$(document).ready(function(){
  $('.delete').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/api/teams/'+id,
      success: function(response){
        window.location.href='/api/teams/';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
