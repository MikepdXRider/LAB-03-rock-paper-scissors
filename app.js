// import functions and grab DOM elements
const gameCounterEl = document.querySelector('#win-loss-draw-counter');
const throwButtonEl = document.querySelector('#throw-button');
const resetButtonEl = document.querySelector('#reset-button');
const textOutputEl = document.querySelector('#text-output');
console.log(gameCounterEl, throwButtonEl, resetButtonEl, textOutputEl);


// initialize global state
numberOfWins = 0;
numberOfLosses = 0;
numberOfDraws = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
