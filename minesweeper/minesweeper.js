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

class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    playMove(rowIndex, columnIndex) {
        this._board.flipTile(rowIndex, columnIndex);
        if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
            console.log('Game Over!');
            this._board.print();
        } else if (!this._board.hasSafeTiles()) {
            console.log('You won!');
        } else {
            console.log('Current Board: ');
            this._board.print();
        }
    }
}

class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile(rowIndex, columnIndex) {
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log('This tile has already been flipped!');
            return;
        }
        else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        }
        else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighboringBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles--;
    }

    getNumberOfNeighboringBombs(rowIndex, columnIndex) {
        const neighborOffsets = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ];

        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;

        neighborOffsets.forEach((offset) => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];

            if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
                neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                    numberOfBombs++;
                }
            }
        });
        return numberOfBombs;
    }

    hasSafeTiles() {
        return (this._numberOfTiles !== this._numberOfBombs);
    }

    print() {
        // console.log('CurrentBoard: ');
        console.log(this._playerBoard.map((row) => row.join(' | ')).join('\n'));
    };

    static generatePlayerBoard(numberOfRows, numberOfColumns) {
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

    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        let board = [];
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            let row = [];
            for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                row.push(null);
            }
            board.push(row);
        }

        let numberOfBombsPlaced = 0;
        while (numberOfBombsPlaced < numberOfBombs) {
            // Potential to overwrite already existing bombs
            let randomRowIndex = Math.floor(Math.random() * Math.floor(numberOfRows));
            let randomColumnIndex = Math.floor(Math.random() * Math.floor(numberOfColumns));
            // console.log('BombRow: %s \n BombColumn: %s', randomRowIndex, randomColumnIndex);
            if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            }

        }
        // console.log(board);

        return board;
    };
}


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

const g = new Game(3, 3, 3);
g.playMove(0, 0);