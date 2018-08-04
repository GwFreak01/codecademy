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

let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

const printBoard = (board) => {
    console.log('CurrentBoard: ');
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));
};


// console.log(board);
printBoard(board);