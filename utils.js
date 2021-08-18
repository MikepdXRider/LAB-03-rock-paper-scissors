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
    element1.disable = true;
    element2.style.display = 'block';
}

export function displayWinText(element1, computerThrow) {
    element1.textContent = `The computer threw ${computerThrow}. You win!`;
}

export function displayDrawText(element1) {
    element1.textContent = `The computer threw ${computerThrow}. It's a draw!`;
}

export function displayLossText(element1) {
    element1.textContent = `The computer threw ${computerThrow}. You lose!`;
}

export function updateGameCounter(element1, wins, losses, draws) {
    element1.textContent = `Win / Loss / Draw : ${wins} / ${losses} / ${draws}`;
}