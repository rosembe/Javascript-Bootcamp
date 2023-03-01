'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Coorrect Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //document.querySelector('.message').textContent = '🛑 No number!;';
    displayMessage('🛑 No number');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //'Your guess is correct ! Congratulations 🧸';
    displayMessage('Your guess is correct ! Congratulations 🧸');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When the guess is not equal to the secret number.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'too high 📈' : 'too low 📉';
      displayMessage(guess > secretNumber ? 'too high 📈' : 'too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '😥 You lost the game ';
      displayMessage('😥 You lost the game ');
      document.querySelector('.score').textContent = 0;
    }
    // When the guess is bigger than the secret number.
  } // else if (guess > secretNumber) {
  //if (score > 1) {
  // document.querySelector('.message').textContent =
  // 'Your guess is too high📈';
  //score--;
  // document.querySelector('.score').textContent = score;
  //} else {
  //document.querySelector('.message').textContent =
  // '😥 You lost the game!  ';
  //document.querySelector('.score').textContent = 0;
  //}
  // When the guess is lower than the secret number.
  //} else if (guess < secretNumber) {
  //document.querySelector('.message').textContent = '📉Too Low';
  //score--;
  //document.querySelector('.score').textContent = score;
  //}
  //});

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent =
      Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  });
});
