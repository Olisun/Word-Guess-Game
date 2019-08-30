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


document.onkeyup = function(event) {
  var keypress = event.key;
  var ol = document.querySelector('ol');
  var li = document.createElement('li');

  if (keypress === 'd') {
    letterOne.innerHTML = 'D'
    guessesRemaining--
    remainingGuesses.innerText = guessesRemaining
  } else if (keypress !== 'd') {
    guessesRemaining--
  }
  if (keypress === 'o') {
    letterTwo.innerHTML = 'O'
  };
  if (keypress === 'g') {
    letterThree.innerHTML = 'G'
  };

  li.appendChild(document.createTextNode(keypress));
  ol.appendChild(li);
}




// var arrayItems = ['letter1', 'letter2', 'letter3', 'letter4', 'letter5', 'letter6', 'letter7', 'letter8'];
// const singleItem = [];
// arrayItems.forEach(function(thingy) {
//   singleItem.push(document.getElementById(thingy));
// })

// singleItem.forEach(thingy);