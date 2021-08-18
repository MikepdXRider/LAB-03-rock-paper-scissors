export function getRandomThrow() {
    let ranNum = Math.round(Math.random() * 2);
    if (ranNum === 0) return 'rock';
    if (ranNum === 1) return 'paper';
    if (ranNum === 2) return 'scissors';
}