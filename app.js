var main = function() {

  $('.favour').click(function() {
    $('form').show(); 
    $('.help-someone').hide(); 
  });

  $('.help').click(function() {
    $('.help-someone').show(); 
    $('form').hide();    
  });

}

$(document).ready(main);


