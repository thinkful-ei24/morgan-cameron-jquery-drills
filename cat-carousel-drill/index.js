'use strict';
$(function(){
  $('.thumbnails').on('click', '.thumbnail', function(event){
    let largerImage = $('.hero img');
    let clickedObj = $(event.currentTarget);
    console.log(clickedObj);
    largerImage.attr({src: $(event.currentTarget).attr('src')}); 
  })
});