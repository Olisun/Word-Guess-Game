var letterOne = document.getElementById('letter1');
var letterTwo = document.getElementById('letter2');
var letterThree = document.getElementById('letter3');
var remainingGuesses = document.getElementById('guesses-remaining')
var guessesRemaining = 5;
var guessesRemaining2 = 5;
var guessesRemaining3 = 5;
var correctGuesses = document.getElementById('correct-guesses');
var correctGuessesNum = 0;
var correctGuessesNum2 = 0;
var correctGuessesNum3 = 0;
var wrongGuesses = document.getElementById('wrong-guesses');
var wrongGuessesNum = 0;
var wrongGuessesNum2 = 0;



document.onkeyup = function(event) {
  var keypress = event.key;
  var ol = document.querySelector('ol');
  var li = document.createElement('li');


  li.appendChild(document.createTextNode(keypress));
  ol.appendChild(li);


  if (keypress === 'd') {
    letterOne.innerHTML = 'D'
    guessesRemaining--
    correctGuessesNum++
    remainingGuesses.innerText = guessesRemaining

  } else {
    guessesRemaining--
    remainingGuesses.innerText = guessesRemaining

  }

  if (keypress === 'e') {
    letterTwo.innerHTML = 'E'
    guessesRemaining2--
    correctGuessesNum2++
    remainingGuesses.innerText = guessesRemaining2

  } else {
    guessesRemaining2--
    remainingGuesses.innerHTML = guessesRemaining2

  }

  if (keypress === 'f') {
    letterThree.innerHTML = 'F'
    guessesRemaining3--
    correctGuessesNum3++
    remainingGuesses.innerText = guessesRemaining3

  } else {
    guessesRemaining3--
    remainingGuesses.innerHTML = guessesRemaining3
  }


}