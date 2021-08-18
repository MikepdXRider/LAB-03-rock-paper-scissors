export function didUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) return 'draw';
    
    if (userThrow === 'rock' && computerThrow === 'scissors') return 'win';
    if (userThrow === 'rock' && computerThrow === 'paper') return 'lose';

    if (userThrow === 'paper' && computerThrow === 'scissors') return 'lose';
    if (userThrow === 'paper' && computerThrow === 'rock') return 'win';

    if (userThrow === 'scissors' && computerThrow === 'paper') return 'win';
    if (userThrow === 'scissors' && computerThrow === 'rock') return 'lose';
}