"use strict";

// const blankLine = '  |   |  ';
//
// console.log('This is what an empty board looks like:');
//
// console.log(blankLine);
// console.log(blankLine);
// console.log(blankLine);
//
// const guessLine = '1 |   |  ';
// const bombLine = '  | B |  ';
//
// console.log('This is what a board with a guess and a bomb on it would look like:');
// console.log(guessLine);
// console.log(bombLine);
// console.log(blankLine);

// let board = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' ']
// ];
//
// const printBoard = (board) => {
//     console.log('CurrentBoard: ');
//     console.log(board[0].join(' | '));
//     console.log(board[1].join(' | '));
//     console.log(board[2].join(' | '));
// };
//
//
// // console.log(board);
// printBoard(board);
//
// board[0][1] = '1';
// board[2][2] = 'B';
//
// printBoard(board);

// let generatePlayerBoard =[];


// generatePlayerBoard(2, 3);

// console.log(generatePlayerBoard);


// generateBombBoard(2, 3, 3);

// console.log(generatePlayerBoard);


// console.log(printBoard(generatePlayerBoard(2,3)));

// let playerBoard = generatePlayerBoard(3, 4);
//
// let bombBoard = generateBombBoard(3, 4, 5);
//
// console.log('Player Board: ');
// printBoard(playerBoard);
// console.log('Bomb Board: ');
// printBoard(bombBoard);
//
// flipTile(playerBoard, bombBoard, 0, 0);
//
// console.log('Updated Player Board: ');
// printBoard(playerBoard);
//test test

var g = new Game(3, 3, 3);
g.playMove(0, 0);