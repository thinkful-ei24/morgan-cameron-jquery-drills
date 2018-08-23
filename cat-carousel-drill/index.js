'use strict';
$(function(){
  $('.thumbnails').on('click', '.thumbnail', function(event){
    let largerImage = $('.hero img');
    let clickedImage = $(event.currentTarget).children('img');
    largerImage.attr({src: clickedImage.attr('src'), alt: clickedImage.attr('alt')}); 
  })
});