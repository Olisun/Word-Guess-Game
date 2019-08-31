var letterOne = document.getElementById('letter1');
var letterTwo = document.getElementById('letter2');
var letterThree = document.getElementById('letter3');
var letterFour = document.getElementById('letter4');
var letterFive = document.getElementById('letter5');
var letterSix = document.getElementById('letter6');
var letterSeven = document.getElementById('letter7');
var letterEight = document.getElementById('letter8');
var userMessage = document.getElementById('message');
var remainingGuesses = document.getElementById('guesses-remaining')
var guessesRemaining = 10;
var guessesRemaining2 = 10;
var guessesRemaining3 = 10;
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
  var correctTotal = correctGuessesNum + correctGuessesNum2;
  var wrongTotal = wrongGuessesNum + wrongGuessesNum2;

  if (keypress === 'd') {
    letterOne.innerHTML = 'D'
    guessesRemaining--
    correctGuessesNum++
    remainingGuesses.innerText = guessesRemaining
    userMessage.innerHTML = 'Nice Guess!'
  } else {
    guessesRemaining--
    wrongGuessesNum++
    remainingGuesses.innerText = guessesRemaining
      // userMessage.innerHTML = 'Sorry but try again!'
  }

  if (keypress === 'o') {
    letterTwo.innerHTML = 'O'
    guessesRemaining2--
    correctGuessesNum2++
    remainingGuesses.innerText = guessesRemaining2
    userMessage.innerHTML = 'Nice Guess!'
  } else {
    guessesRemaining2--
    wrongGuessesNum2++
    remainingGuesses.innerHTML = guessesRemaining2
    userMessage.innerHTML = 'Sorry but try again!'
  }

  // if (keypress === 'g') {
  //   letterThree.innerHTML = 'G'
  //   guessesRemaining3--
  //   correctGuessesNum3++
  //   // remainingGuesses.innerText = guessesRemaining2
  //   // userMessage.innerHTML = 'Nice Guess!'
  // } else {
  //   guessesRemaining3--
  //   wrongGuessesNum3++
  //   // remainingGuesses.innerHTML = guessesRemaining2
  //   // userMessage.innerHTML = 'Sorry but try again!'
  // }

  li.appendChild(document.createTextNode(keypress));
  ol.appendChild(li);



  correctGuesses.innerHTML = `Your correct guesses: ${correctTotal}`
  wrongGuesses.innerHTML = `Your incorrect guesses: ${wrongTotal}`;
}