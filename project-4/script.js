const random = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please give valid number');
    }else if(guess<1){
        alert('do not enter less than 1 ')
    }else if(guess>100){
        alert('please enter smaller no. then 100')
    }else{
        prevGuess.push(guess);
        displayGuess(guess);
        if(prevGuess.length === 11){
            displayGuess(guess);
            displayMessage(`GAME OVER!!, random number is ${random}`)
            endGame();
        }else{
            checkGuess(guess);
            // displayMessage(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === random){
        displayMessage(`win the GAME`);
    }else if(guess < random){
        displayMessage(`your number is TOOOO low`);
    }else if(guess > random){
        displayMessage(`your number is TOOOO high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}