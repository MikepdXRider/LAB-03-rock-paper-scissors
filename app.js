import { getRandomThrow } from './get-random-throw.js';
import { didUserWin, disableThrowEnableReset, displayDrawText, displayLossText, displayWinText, updateGameCounter, resetGame } from './utils.js';

// import functions and grab DOM elements
const gameCounterEl = document.querySelector('#win-loss-draw-counter');
const throwButtonEl = document.querySelector('#throw-button');
const resetButtonEl = document.querySelector('#reset-button');
const textOutputEl = document.querySelector('#text-output');
// console.log(gameCounterEl, throwButtonEl, resetButtonEl, textOutputEl);

// Imported Function Validation
// console.log(getRandomThrow());

// initialize global state
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;
let resetCounter = 1;

// set event listeners 
throwButtonEl.addEventListener('click', () => {
    const checkedInput = document.querySelector('input:checked');

    if (checkedInput === null) {
        throw new Error('You must select a weapon!');
    } else {

        let correctAnswer = getRandomThrow();
        // console.log('computer throw', correctAnswer);
  
        const userInput = document.querySelector('input:checked').value;  
        // console.log('user input', userInput);    

        const gameResult = didUserWin(userInput, correctAnswer);
          // console.log('game result', gameResult);

        if (gameResult === 'win'){
            numberOfWins++;
            displayWinText(textOutputEl, correctAnswer); 
        }

        if (gameResult === 'lose'){
            numberOfLosses++;
            displayLossText(textOutputEl, correctAnswer);
        }

        if (gameResult === 'draw'){
            numberOfDraws++;
            displayDrawText(textOutputEl, correctAnswer);
        }

        disableThrowEnableReset(throwButtonEl, resetButtonEl);
        updateGameCounter(gameCounterEl, numberOfWins, numberOfLosses, numberOfDraws);
    }
});

resetButtonEl.addEventListener('click', () => {
    resetCounter++;
    resetGame(throwButtonEl, resetButtonEl, textOutputEl, resetCounter);
});


