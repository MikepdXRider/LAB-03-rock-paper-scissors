// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

// DRAW
test('user selects rock and computer selects rock expecting draw', (expect) => {

    const expected = 'draw';
    
    const actual = didUserWin('rock', 'rock');

    expect.equal(actual, expected);
});

test('user selects paper and computer selects paper expecting draw', (expect) => {

    const expected = 'draw';
    
    const actual = didUserWin('paper', 'paper');

    expect.equal(actual, expected);
});

test('user selects scissors and computer selects scissors expecting draw', (expect) => {

    const expected = 'draw';
    
    const actual = didUserWin('scissors', 'scissors');

    expect.equal(actual, expected);
});


//WIN
test('user selects rock and computer selects scissors expecting win', (expect) => {

    const expected = 'win';
    
    const actual = didUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});

test('user selects paper and computer selects rock expecting win', (expect) => {

    const expected = 'win';
    
    const actual = didUserWin('paper', 'rock');

    expect.equal(actual, expected);
});

test('user selects scissors and computer selects paper expecting win', (expect) => {

    const expected = 'win';
    
    const actual = didUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});


//LOSE
test('user selects rock and computer selects paper expecting lose', (expect) => {

    const expected = 'lose';
    
    const actual = didUserWin('rock', 'paper');

    expect.equal(actual, expected);
});

test('user selects paper and computer selects scissors expecting lose', (expect) => {

    const expected = 'lose';
    
    const actual = didUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});

test('user selects scissors and computer selects rock expecting lose', (expect) => {

    const expected = 'lose';
    
    const actual = didUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});

//getRandomThrow Tests
test('expect a string containing rock, scissors, or paper', (expect) => {
    
    const expectedArray = ['rock', 'paper', 'scissors'];

    const expected = true;
    
    const actual = expectedArray.includes(getRandomThrow());

    expect.equal(actual, expected);
});

