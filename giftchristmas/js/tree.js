// click on the tree to see the animation again. 

$(document).ready(function(){
    $('#christmas-tree').mouseleave(function(){
      $(this).removeClass('clicked');
    }).click(function(){
      $(this).addClass('clicked').html($(this).html());
    });
  });