// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, solve, isSolved, prettyBoard } = require('./sudoku');

const puzzle = read();
const solved = solve(puzzle);
const isSolvedFlag = isSolved(solved);
if (isSolvedFlag === true) {
  prettyBoard(puzzle, solved);
  console.log(true);
} else {
  console.log(false);
}
