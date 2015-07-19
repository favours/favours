var main = function() {

  $('.favour').click(function() {
    $('form').show(); 
    $('.help-someone').hide(); 
  });

  $('.help').click(function() {
    $('.help-someone').show(); 
    $('form').hide();    
  });

  $('.do-it').click(function() {
    $('.do-it-form').show(); 
    $('.ask-form').hide();    
  });

  $('.ask').click(function() {
    $('.ask-form').show(); 
    $('.do-it-form').hide();    
  });

}

$(document).ready(main);


