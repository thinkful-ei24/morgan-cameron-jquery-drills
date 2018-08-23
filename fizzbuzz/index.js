'use strict';

const fizzbuzzer = function(num){
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
};

$(function(){
  $('#number-chooser').on('submit', function(event){
    event.preventDefault();
    const userInputField = $('#number-choice');
    const userInput = userInputField.val();
    console.log(userInput);
  });
});