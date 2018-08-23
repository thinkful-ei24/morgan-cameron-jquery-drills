'use strict';

const fizzbuzzer = function(num){
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
};

function generateFizzHtml(fizzbuzzedItem) {
  let className = '';
  if (typeof fizzbuzzedItem === 'string') {
    className = fizzbuzzedItem;
  }

  return `
    <div class="fizz-buzz-item ${className}">
      <span>${fizzbuzzedItem}</span>
    </div>
  `;
}

$(function(){
  $('#number-chooser').on('submit', function(event){
    event.preventDefault();
    const userInputField = $('#number-choice');
    const userInput = userInputField.val();
    userInputField.val('');

    let resultsContainer = $('.js-results');

    const fizzbuzzResults = [];
    for (let i = 1; i <= userInput; i++) {
      fizzbuzzResults.push(fizzbuzzer(i));
    }
    const htmlElements = fizzbuzzResults.map(result =>        generateFizzHtml(result));
    $('.js-results').html(htmlElements);
  });
});