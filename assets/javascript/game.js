// Declaring global variables
var letterOne = document.getElementById('letter1');
var letterTwo = document.getElementById('letter2');
var letterThree = document.getElementById('letter3');
var remainingGuesses = document.getElementById('guesses-remaining')
var guessesRemaining = 5;
var correctKeysPressed = 0;

// Declaring keypress function
document.onkeyup = function(event) {
  // Declaring local variables
  var keypress = event.key;
  var ol = document.querySelector('ol');
  var li = document.createElement('li');

  // Appending corredct keys press to DOM
  li.appendChild(document.createTextNode(keypress));
  ol.appendChild(li);

  // Setting actions for keys pressed
  if (keypress === 'd') {
    letterOne.innerHTML = 'D'
    guessesRemaining--
    correctKeysPressed++
    remainingGuesses.innerText = guessesRemaining
  } else {
    guessesRemaining--
    remainingGuesses.innerText = guessesRemaining
  }

  if (keypress === 'e') {
    letterTwo.innerHTML = 'E'
    correctKeysPressed++
  }

  if (keypress === 'f') {
    letterThree.innerHTML = 'F'
    correctKeysPressed++
  }

  // Setting function for game over when # of guesses is hits 5
  function gameOver() {
    if (guessesRemaining < 1) {
      alert('Game Over')
    }
  }

  // Setting function for alerting user win all 3 letters are typed.
  function youWin() {
    if (correctKeysPressed === 3) {
      alert('You guessed it!')
    }
  }

  // calling the 2 functions aobe to activate them.
  gameOver();
  youWin();

}