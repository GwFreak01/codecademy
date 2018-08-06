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

let generatePlayerBoard =[];

generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        let row = [];
        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(' ');
        }
        board.push(row);
    }
    console.log(board);
    return board;
    // generatePlayerBoard = board;
};
generatePlayerBoard(2, 3);

// console.log(generatePlayerBoard);

generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        let row = [];
        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(null);
        }
        board.push(row);
    }
    console.log(board);
    return board;
};