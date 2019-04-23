function generateRandomNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  var input = document.getElementById('guess');
  var paragraph = document.querySelector('p');
  var guessButton = document.querySelector('input[type=submit]');
  var answer;
  var guesses;
  var gameIsWon;

  function newGame() {
    form.reset();
    guessButton.enabled = true;
    answer = generateRandomNumber();
    guesses = 0;
    paragraph.textContent = 'Please guess a number from 1 to 100';
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var message;

    guesses++;

    var guess = parseInt(input.value, 10);

    if (isNaN(guess)) {
      message = 'The input is invalid. Must be a number between 1 and 100';
    } else if (guess === answer) {
      guessButton.disabled = true;
      message = 'Your guess is correct! It took you ' + guesses + ' guesses';
    } else if (guess > answer) {
      message = 'My answer is lower than ' + String(guess);
    } else {
      message = 'My answer is higher than ' + String(guess);
    }

    paragraph.textContent = message;

  });

  var link = document.querySelector('a');

  link.addEventListener('click', function(event) {
    event.preventDefault();

    newGame();
  });

  newGame();
});