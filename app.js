import { getRandomThrow } from './get-random-throw.js';
import { didUserWin, displayDrawText, displayLossText, displayWinText, updateGameCounter } from './utils.js';

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

// set event listeners 
throwButtonEl.addEventListener('click', () => {
    let correctAnswer = getRandomThrow();
    console.log(correctAnswer);

    const userSelectedInput = document.querySelector('input:checked').value;
    console.log(userSelectedInput);

  // if (didUserWin === 'win'){
  //   // - Update text field.
  //   // - Increment numberOfWins.
  //   // - Update win/loss counter. 
  // }
})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
