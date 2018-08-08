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

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        let row = [];
        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(' ');
        }
        board.push(row);
    }
    // console.log(board);
    return board;
    // generatePlayerBoard = board;
};
// generatePlayerBoard(2, 3);

// console.log(generatePlayerBoard);

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        let row = [];
        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(null);
        }
        board.push(row);
    }

    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced <= numberOfBombs) {
        // Potential to overwrite already existing bombs
        let randomRowIndex = Math.floor(Math.random() * Math.floor(numberOfRows));
        let randomColumnIndex = Math.floor(Math.random() * Math.floor(numberOfColumns));
        // console.log('BombRow: %s \n BombColumn: %s', randomRowIndex, randomColumnIndex);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }
    // console.log(board);

    return board;
};
// generateBombBoard(2, 3, 3);

// console.log(generatePlayerBoard);

const printBoard = (board) => {
    // console.log('CurrentBoard: ');
    console.log(board.map((row) => row.join(' | ')).join('\n'));
    // console.log(board[0].join(' | '));
    // console.log(board[1].join(' | '));
    // console.log(board[2].join(' | '));


};


// console.log(printBoard(generatePlayerBoard(2,3)));

let playerBoard = generatePlayerBoard(3, 4);

let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);


