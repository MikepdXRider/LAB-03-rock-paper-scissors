export function didUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) return 'draw';
    
    if (userThrow === 'rock' && computerThrow === 'scissors') return 'win';
    if (userThrow === 'rock' && computerThrow === 'paper') return 'lose';

    if (userThrow === 'paper' && computerThrow === 'scissors') return 'lose';
    if (userThrow === 'paper' && computerThrow === 'rock') return 'win';

    if (userThrow === 'scissors' && computerThrow === 'paper') return 'win';
    if (userThrow === 'scissors' && computerThrow === 'rock') return 'lose';
}

export function disableThrowEnableReset(element1, element2){
    element1.disabled = true;
    element2.style.display = 'block';
}

export function displayWinText(element3, compThrow) {
    element3.textContent = `The computer threw ${compThrow}. You win!`;
}

export function displayDrawText(element4, compThrow) {
    element4.textContent = `The computer threw ${compThrow}. It's a draw!`;
}

export function displayLossText(element5, compThrow) {
    element5.textContent = `The computer threw ${compThrow}. You lose!`;
}

export function updateGameCounter(element6, wins, losses, draws) {
    element6.textContent = `Win / Loss / Draw : ${wins} / ${losses} / ${draws}`;
}

export function resetGame(element7, element8, element9, rounds){
    element7.disabled = false;
    element8.style.display = 'none';
    element9.textContent = `Round ${rounds}! Select your desired weapon and click throw to begin!`;
}

export function validateUserInput(userInput) {
    if (userInput === null) {
        throw new Error('You must select a weapon!');
    }
}